import '../styles/Chats.scss'

import React, { useContext, useEffect, useState } from "react";
import ModalWindow from "./UI/modal/ModalWindow";
import AddChat from './AddChat';
import { ChatContext } from '../Contexts';
import { collection, doc, setDoc, Timestamp } from 'firebase/firestore';
import ChatSwitch from './ChatSwitch';
import { useCollection } from 'react-firebase-hooks/firestore';

const Chats = ({setChat}) => {
    let {auth, db} = useContext(ChatContext)
	
	let [visibleModal, setVisibleModal] = useState(false)
	let [chats, setChats] = useState([])
	
	let [chat, loading] = useCollection(collection(db, 'chats'))

	useEffect(() =>{ 
		if(chat){
			let chatsArray = []
			chat.docs.map((doc) => {
				chatsArray.push({
					chatName : doc.data().chatName, 
					chatMembers: doc.data().chatMembers,
					chatId : doc.id
				})
			})
			setChats(chatsArray)
		}
	}, [chat])

	const addChat = async (chatOptions) => {
		setChats([...chats, chatOptions.chatName]);

		const chatId = Math.random().toString();

		const chatRef = doc(db, 'chats', chatId)
		
		await setDoc(chatRef,{
			chatName: chatOptions.chatName,
			chatMembers: chatOptions.chatMembers
		})
		await setDoc(doc(chatRef, 'messages', chatId),{
			text: `${auth.currentUser.displayName} created chat "${chatOptions.chatName}"`,
			createdAt: Timestamp.now(),
			type: 'info'
		})
	}

	const switchChat = (chatOptions) =>{
		setChat({...chatOptions});
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
					return <ChatSwitch 
						key={Math.random()} 
						switchChat={switchChat} 
						chatOptions={chat}
					/>
				})}
			</div>
        </div>
    );
};
export default Chats;
