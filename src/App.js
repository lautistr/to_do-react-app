import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';
// import './App.css';

const toDos = [
  {text: "Look up for inspiration", completed: false},
  {text: "CSS writing", completed: false},
  {text: "Lunch break", completed: false}
]

function App() {
  return (
    <>
      <ToDoCounter/>
      <ToDoSearch/>
      <ToDoList>
        {toDos.map(toDo => (<ToDoItem key={toDo.text} text={toDo.text} />))}
      </ToDoList>
      <CreateToDoButton/>
    </>
  );
}

export default App;
