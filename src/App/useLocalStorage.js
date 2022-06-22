import React from 'react';

function useLocalStorage(itemName, initialValue) {
    const localStoragedItem = localStorage.getItem(itemName);
    let parsedItem;
    
    if(!localStoragedItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = [];
    } else {
      parsedItem = JSON.parse(localStoragedItem);
    }
    const [ item, setItem] = React.useState(parsedItem);
  
    const storageItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    }
  
    return [
      item,
      storageItem,
    ]
  }

  export { useLocalStorage };