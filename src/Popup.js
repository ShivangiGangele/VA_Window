import React, { useState } from "react";
import "./chatIcon.css";
import Logo from "./chat.png";
import Draggable from 'react-draggable'

function PopUp() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="chat-icon-container">
      <div className="chat-icon" onClick={togglePopup}>
        <img src={Logo} width="50" height="50" alt=""></img>
      </div>
  
      {isOpen && (
        <Draggable>
        <div className="chat-window">
          <div className="chat-header">
            <p></p>
            <button className="chat-minimize-icon" onClick={handleClose}>
              -
            </button>
          </div>
          <div className="chat-body"></div>
          <div className="chat-footer">
            <input type="text" placeholder="Message from Bot"></input>
            <button></button>
          </div>
        </div>
        </Draggable>
      )}
    </div>
  );
}

export default PopUp;
