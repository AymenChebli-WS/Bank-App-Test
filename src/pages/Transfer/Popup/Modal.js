import React from "react";
import "./Modal.css";

function Modal({ setOpenModal,handleSubmit,sender,receiver,amount,Devise }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
  
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
  
        </div>
        <div className="title">
          <h1>Êtes-vous sûr de vouloir vous transformer ?</h1>
        </div>
        <div className="body">
          <p>Vous êtes sur le point de transférer un montant : <strong> {amount} {Devise}</strong> de  <strong>{sender}</strong> à  <strong>{receiver}. </strong></p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Annuler
          </button>
          <button  onClick={()=>{
            handleSubmit()
          }}>Envoyer</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;