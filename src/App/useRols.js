import React from 'react';
import { useLocalStorage } from './useLocalStorage';

function useRols() {
  
  const [ rols, storageRols ] = useLocalStorage('ROLS_V1', []);
  const [ rolsModalOpener, toggleRolsModalOpener ] = React.useState(false);

  const totalRols = rols.length
  
  const createRol = (text) => {
    const newRols = [...rols];
    newRols.push(text);
    storageRols(newRols)
  }

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
      toggleRolsModalOpener,
      totalRols,
      createRol,
    };
}

export { useRols };