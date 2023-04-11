import React from "react";

const ChatSwitch = ({chatOptions, switchChat}) => {
    
    return (
        <div onClick={() => switchChat(chatOptions)} className='chat'>
            <i
                style={{ color: "#6444DC", fontSize: 40 }}
                class='fa-regular fa-user'></i>{" "}
            {/*FIX put here img*/}
            <label id='chat-name'>{chatOptions.chatName}</label>
            <label id='last-activity'>user: last message</label>
            <label id='la-time'>2h</label>
        </div>
    );
};
export default ChatSwitch;
