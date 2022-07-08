import React from "react";
import './styles.css';

function RolList(props) {
    return (
        <section className="RolList">
            <h3 className="RolList-Title">ROLS</h3>
            <ul className="RolList-TasksContainer">
                {props.children}
            </ul>
        </section>
    )
}

export { RolList };