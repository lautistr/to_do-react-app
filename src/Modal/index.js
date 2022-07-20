import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal (props) {
    return ReactDOM.createPortal(
      <div className="ModalBackground">
        {!!props.toDosModalOpener && props.ToDoForm()}
        {!!props.rolsModalOpener && props.RolForm()}
      </div>,
        document.getElementById('modal')
      );
    }
    
    export { Modal };