import React, { useContext, useState } from "react";

import "./Messaging.scss";
import Chats from "../../components/Chats";
import { ChatContext } from "../../Contexts";
import Chat_field from "../../components/ChatField";
import Members from "../../components/Members";
import { Link, useNavigate } from "react-router-dom";
import HorizontalNavbar from "../../components/UI/HorizontalNavbar/HorizontalNavbar";

const Messaging = () => {
    let [currentChat, setCurrentChat] = useState({chatName: 'test', chatId: '012412233'});

    return (
        <div className='main-container'>
            <HorizontalNavbar/>
            <hr className='horizont-hr' />
            <div className='center-field'>
                <Chats setChat={setCurrentChat} />
                
                <hr />

                <Chat_field chat={currentChat} />

                <hr />

                <Members chat={currentChat}/>
            </div>
        </div>
    );
};
export default Messaging;
