import React, { useState } from "react";
import '../styles/Message.scss'

const Message = ({photoURL, text, createdAt, fromUser}) => {
    return (
        <div className={`message ${fromUser}`}>
            <img src={photoURL} id='message-user-img'/>
            <label>{text}</label>
        </div>
    );
};
export default Message;
