import React from "react";

function ToDoSearch({ searchValue, setSearchValue }){
  
    const onSearchValueChange = (event) => {
      console.log(event.target.value);
      setSearchValue(event.target.value);
    };
    
    return (
        <input
            placeholder="Search"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    )
}

export { ToDoSearch };