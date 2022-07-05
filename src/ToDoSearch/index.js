import React from "react";
import './styles.css';

function ToDoSearch({ searchValue, setSearchValue }){
  
    const onSearchValueChange = (event) => {
      console.log(event.target.value);
      setSearchValue(event.target.value);
    };
    
    return (
        <input
            placeholder="Search"
            value={searchValue}
            className="TodoSearch"
            onChange={onSearchValueChange}
        />
    )
}

export { ToDoSearch };