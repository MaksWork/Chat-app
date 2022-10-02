import '../styles/Chats.scss'

import React, { useContext, useEffect, useState } from "react";
import ModalWindow from "./UI/modal/ModalWindow";
import AddChat from './AddChat';
import { ChatContext } from '../Contexts';
import { collection } from 'firebase/firestore';
import ChatSwitch from './ChatSwitch';
import { useCollection } from 'react-firebase-hooks/firestore';
import { getAuth } from 'firebase/auth';

const Chats = ({setChat}) => {
    let {auth, db} = useContext(ChatContext)
	
	let [visibleModal, setVisibleModal] = useState(false)
	let [chats, setChats] = useState([])
	
	let [test, loaging] = useCollection(collection(db, 'chats'))

	useEffect(() =>{ 
		if(test){
			let chatsArray = []
			test.docs.map((doc) => {
				chatsArray.push(doc.id)
			})
			setChats(chatsArray)
		}
	}, [test])

	const addChat = (chatName) =>{
		setChats([...chats, chatName])
	}

	const switchChat = (chatName) =>{
		setChat(chatName)
	}

	return (
        <div className='chats-cont'>
            <ModalWindow isVisible={visibleModal} setVisible={setVisibleModal}>
				<AddChat setVisible={setVisibleModal} setChats={addChat}/>
			</ModalWindow>
			<div id='top-nav-chats'>
                <label>Chats</label>
                <i id='find-chat' class='fa-solid fa-magnifying-glass'></i>
                <i onClick={() => setVisibleModal(true)} id='create-chat' class='fa-solid fa-plus'></i>
            </div>
			<div>
				<button className="toggle-btn active">Open</button>
				<button className="toggle-btn">Done</button>
				<button className="toggle-btn">Unread</button>
			</div>
			<div id="chats-list">
				{chats.map(chat =>{
					return <ChatSwitch key={Math.random()} switchChat={switchChat} chatName={chat}/>
				})}
			</div>
        </div>
    );
};
export default Chats;
