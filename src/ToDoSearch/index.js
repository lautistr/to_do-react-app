import React, { useState } from "react";
import './styles.css';

function ToDoSearch({ searchValue, setSearchValue, open, setOpen }){
    
  
    const onSearchValueChange = (event) => {
      console.log(event.target.value);
      setSearchValue(event.target.value);
    };

    const onIconClick = () => {
        setOpen(true);
        console.log(open)
    }

    
    return (
        <div className="ToDoSearch">
            <span className="ToDoSearch-Menu">=</span>
                {open && 
                    <input
                        placeholder="Search"
                        value={searchValue}
                        className="TodoSearch-Input"
                        onChange={onSearchValueChange}
                    />
                }
        {!open && 
            <span
                className="ToDoSearch-Search" 
                onClick={onIconClick} 
            >
                🔍
            </span>}
        </div>
    )
}

export { ToDoSearch };