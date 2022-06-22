import React from "react";
import { useTodos } from './useTodos';
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';
import { Modal } from '../Modal';
import { ToDoForm } from '../ToDoForm';
import { ToDoHeader } from '../ToDoHeader';


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

  return (
    <>
      <ToDoHeader>
        <ToDoCounter
          totalToDos={totalToDos}
          completedToDos={completedToDos}
        />
        <ToDoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </ToDoHeader>

      <ToDoList>        
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
    </>
  );
}

export default App;
