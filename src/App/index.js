import React, {useState} from "react";
import { useTodos } from './useTodos';
import { useRols } from './useRols';
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
import { RolForm } from '../RolForm';

import './App.css';

function App() {  

  const {
    searchedToDos,
    toggleToDoState,
    deleteToDo,
    toDosModalOpener,
    toggleToDosModalOpener,
    totalToDos,
    completedToDos,
    createToDo,
    searchValue,
    setSearchValue,
  } = useTodos();

  const {
    rols,
    rolsModalOpener,
    tasksForRol,
    taskCompletedPercentage,
    toggleRolsModalOpener,
    totalRols,
    createRol,
  } = useRols();

  console.log(tasksForRol);

  const [open, toggleOpen ] = useState(false);
  const closeSearchBar = () => {
    toggleOpen(false)
  }

  const onClickButton = () => {
    toggleRolsModalOpener(!rolsModalOpener);
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
        {rols.map(rol => (
            <RolPreview
              tasksNumber={tasksForRol[rol].length}
              tasksOrRols={'tasks'}
              key={rol}
              rolTitle={rol}
              completed={taskCompletedPercentage[rol]}
            />
          ))}
        <RolPreview
          tasksNumber={totalRols || 0}
          tasksOrRols={'rols'}
          rolTitle={`Create ${!totalRols ? 'your first' : "new"}!`}
          completed={0}
          onClick={onClickButton}
        />
      </RolList>
      <ToDoList>
        {/* {(totalToDos === 0 || completedToDos === totalToDos) &&
           <ToDoRandom
            createToDo={createToDo}
            useGetRandomActivity={useGetRandomActivity} 
           />}    */}
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
      
      {!!toDosModalOpener && 
        <Modal>
          <ToDoForm
            createToDo={createToDo}
            toggleToDosModalOpener={toggleToDosModalOpener}
            rols={rols}
          />
        </Modal>
        }
      {!!rolsModalOpener && 
        <Modal>
          <RolForm
            createRol={createRol}
            toggleRolsModalOpener={toggleRolsModalOpener}
          />
        </Modal>
        }


      <CreateToDoButton
        toDosModalOpener={toDosModalOpener}
        toggleToDosModalOpener={toggleToDosModalOpener}
      />
    </div>
  );
}

export default App;
