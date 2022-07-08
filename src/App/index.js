import React, {useState} from "react";
import { useTodos } from './useTodos';
import { useGetRandomActivity } from './useGetRandomActivity';
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';
import { Modal } from '../Modal';
import { ToDoForm } from '../ToDoForm';
import { ToDoHeader } from '../ToDoHeader';
import { ToDoRandom } from '../ToDoRandom';
import { RolPreview } from '../RolPreview';
import { RolList } from '../RolList';

import './App.css';

function App() {  

  const {
    searchedToDos,
    toggleToDoState,
    deleteToDo,
    modalOpener,
    toggleModalOpener,
    totalToDos,
    completedToDos,
    createToDo,
    searchValue,
    setSearchValue,
  } = useTodos();

  const [open, toggleOpen ] = useState(false);
  const closeSearchBar = () => {
    toggleOpen(false)
  }

  return (
    <div onClick={closeSearchBar} >
      <ToDoHeader>
        {/* <ToDoCounter
          totalToDos={totalToDos}
          completedToDos={completedToDos}
        /> */}
        <ToDoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          open={open}
          toggleOpen={toggleOpen}
          
        />
      </ToDoHeader>
      <RolList>
        <RolPreview/>
        <RolPreview/>
        <RolPreview/>
        <RolPreview/>
        <RolPreview/>
      </RolList>
      <ToDoList>
        {(totalToDos === 0 || completedToDos === totalToDos) &&
           <ToDoRandom
            createToDo={createToDo}
            useGetRandomActivity={useGetRandomActivity} 
           />}   
        {searchedToDos.map(toDo => (
          <ToDoItem
            key={toDo.text}
            text={toDo.text}
            completed={toDo.completed}
            onComplete={() => toggleToDoState(toDo.text)}
            onDelete={() => deleteToDo(toDo.text)}
          />
        ))}
      </ToDoList>
      
      {!!modalOpener && 
        <Modal>
          <ToDoForm
            createToDo={createToDo}
            toggleModalOpener={toggleModalOpener}
          />
        </Modal>
        }


      <CreateToDoButton
        modalOpener={modalOpener}
        toggleModalOpener={toggleModalOpener}
      />
    </div>
  );
}

export default App;
