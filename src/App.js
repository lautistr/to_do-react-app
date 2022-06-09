import React from "react";
import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';
// import './App.css';

const defaultToDos = [{
  text: "Look up for inspiration", completed: false},
  {text: "CSS writing", completed: false},
  {text: "Lunch break", completed: false},
]

function App() {

  const [toDos, setToDos] = React.useState(defaultToDos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedToDos = toDos.filter(toDo => !!toDo.completed).length;
  const totalToDos = toDos.length;

  let searchedToDos = [];

  if (!searchValue >= 1) {
    searchedToDos = toDos;
  } else {
    searchedToDos = toDos.filter(toDo => {
      const toDoText = toDo.text.toLowerCase();
      const searchedText = searchValue.toLowerCase();
      return toDoText.includes(searchedText);
    })
  }

  const toggleToDoState = (text) => {
    const index = toDos.findIndex(toDo => toDo.text === text);
    const newToDos = [...toDos];
    newToDos[index].completed = !newToDos[index].completed;
    setToDos(newToDos)
  }

  const deleteToDo = (text) => {
    const index = toDos.findIndex(toDo => toDo.text === text);
    const newToDos = [...toDos];
    newToDos.splice(index, 1);
    setToDos(newToDos)
  }

  return (
    <>
      <ToDoCounter
        totalToDos={totalToDos}
        completedToDos={completedToDos}
      />
      <ToDoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <ToDoList>
        {searchedToDos.map(toDo => (
          <ToDoItem
            key={toDo.text}
            text={toDo.text}
            completed={toDo.completed}
            onComplete={() => toggleToDoState(toDo.text)}
            onDelete={() => deleteToDo(toDo.text)}
          />))}
      </ToDoList>
      <CreateToDoButton/>
    </>
  );
}

export default App;
