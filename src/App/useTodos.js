import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { useRols } from './useRols';

function useTodos() {
    const [ toDos, storageToDos ] = useLocalStorage('TODOS_V1', [])
    const [ toDosModalOpener, toggleToDosModalOpener ] = React.useState(false);

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
  
  
    const createToDo = (text, rol) => {
      const newToDos = [...toDos];
      newToDos.push({completed: false, text, rol: rol});
      storageToDos(newToDos)
    }

    const toggleToDoState = (text) => {
      const index = toDos.findIndex(toDo => toDo.text === text);
      const newToDos = [...toDos];
      newToDos[index].completed = !newToDos[index].completed;
      storageToDos(newToDos)
    }
  
    const deleteToDo = (text) => {
      const index = toDos.findIndex(toDo => toDo.text === text);
      const newToDos = [...toDos];
      newToDos.splice(index, 1);
      storageToDos(newToDos)
    }
  
    // rols

    const {rols} = useRols()

    const tasksForRol = {};
    const taskCompletedPercentage = {};
    let newTasks = [];
    rols.forEach(rol => {
      let tasks = [...toDos]
      newTasks = tasks.filter(toDo => toDo.rol === rol);
      tasksForRol[rol] = newTasks;
      taskCompletedPercentage[rol] = ((tasksForRol[rol].filter(task => (task.completed === true)).length)/tasksForRol[rol].length)*100;
    })

    const getRolTasksLength = (rol) => {
      const rolLength = 
        (!tasksForRol[rol])
          ? 0
          : tasksForRol[rol].length;
      return rolLength;
    }

  return {
      totalToDos,
      completedToDos,
      searchValue,
      setSearchValue,
      searchedToDos,
      toggleToDoState,
      deleteToDo,
      createToDo,
      toDosModalOpener,
      toggleToDosModalOpener,
      tasksForRol,
      taskCompletedPercentage,
      getRolTasksLength,
    };
}

export { useTodos };