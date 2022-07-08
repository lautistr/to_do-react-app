import React, { useState } from "react";
import './styles.css';

function ToDoSearch({ searchValue, setSearchValue, open, toggleOpen }){
    
  
    const onSearchValueChange = (event) => {
      console.log(event.target.value);
      setSearchValue(event.target.value);
    };

    const onIconClick = (event) => {
        toggleOpen(true)
        event.stopPropagation();
    }
    
    return (
        <div className="ToDoSearch">
            <span className="ToDoSearch-Menu">=</span>
            <div>
                <input
                    placeholder="Search"
                    value={searchValue}
                    className={`TodoSearch-Input ${open && "TodoSearch-Input-Opened"}`}
                    onChange={onSearchValueChange}
                    onClick={onIconClick} 
                />
                <span
                    onClick={onIconClick}
                    className={`ToDoSearch-Icon ${open && "ToDoSearch-Icon-Opened"}`}>🔍</span>
            </div>
        </div>
    )
}

export { ToDoSearch };