import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { useTodos } from './useTodos';

function useRols() {
  
  const [ rols, storageRols ] = useLocalStorage('ROLS_V1', []);
  const [ rolsModalOpener, toggleRolsModalOpener ] = React.useState(false);
  
  const totalRols = rols.length;

  const createRol = (text) => {
    const newRols = [...rols];
    newRols.push(text);
    storageRols(newRols)
  }

  const {searchedToDos}  = useTodos();
  // const [toDos, storageToDos]  = useLocalStorage();
  // console.log(JSON.parse(toDos))

  const tasksForRol = {};
  const taskCompletedPercentage = {};
  let tasks = [];
  rols.forEach(rol => {
    tasks = searchedToDos.filter(toDo => toDo.rol == rol);
    tasksForRol[rol] = tasks;
    taskCompletedPercentage[rol] = ((tasksForRol[rol].filter(task => (task.completed == true)).length)/tasksForRol[rol].length)*100;
  })

  //   const [searchValue, setSearchValue] = React.useState('');
  
  //   const completedToDos = toDos.filter(toDo => !!toDo.completed).length;
  
  //   let searchedToDos = [];
  
  //   if (!searchValue >= 1) {
  //     searchedToDos = toDos;
  //   } else {
  //       searchedToDos = toDos.filter(toDo => {
  //       const toDoText = toDo.text.toLowerCase();
  //       const searchedText = searchValue.toLowerCase();
  //       return toDoText.includes(searchedText);
  //     })
  //   }
  
  

  //   const toggleToDoState = (text) => {
  //     const index = toDos.findIndex(toDo => toDo.text === text);
  //     const newToDos = [...toDos];
  //     newToDos[index].completed = !newToDos[index].completed;
  //     storageToDos(newToDos)
  //   }
  
  //   const deleteToDo = (text) => {
  //     const index = toDos.findIndex(toDo => toDo.text === text);
  //     const newToDos = [...toDos];
  //     newToDos.splice(index, 1);
  //     storageToDos(newToDos)
  //   }
  
  return {
      rols,
      rolsModalOpener,
      tasksForRol,
      taskCompletedPercentage,
      toggleRolsModalOpener,
      totalRols,
      createRol,
    };
}

export { useRols };