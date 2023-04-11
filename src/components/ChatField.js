import { addDoc, setDoc, collection, orderBy, query, Timestamp, doc} from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { ChatContext } from '../Contexts';
import '../styles/ChatField.scss';
import Message from './Message';
import { setMessageClass } from '../utils';

const Chat_field = ({chat}) => {
	let [value, setValue] = useState('')
	const {auth, db} = useContext(ChatContext)
	const [user] = useAuthState(auth)

	const chatRef = doc(db, 'chats', chat.chatId)

	const [messages, loading] = useCollection(query(collection(chatRef, 'messages'), orderBy('createdAt')));
	
	const sendMessage = async () =>{
		await setDoc(doc(chatRef, 'messages', value),{
			uid: user.uid,
			photoURL: user.photoURL,
			text: value,
			createdAt: Timestamp.now(),
			type: 'regular'
		})
		setValue('');
	}

	return(
		<div id='chat_field'>
			<label id='chat_field_title'>{chat.chatName}</label>
			<div className='messages'>
				{messages &&					
					messages.docs.map((doc) =>{
						let fromUser = setMessageClass(doc.data().uid, user.uid);
						
						return <Message 
							key={doc.data().createdAt}
							type={doc.data().type}
							text={doc.data().text} 
							createdAt={doc.data().createdAt} 
							photoURL={doc.data().photoURL}
							fromUser={fromUser}
							uid={doc.data().uid}
						/>
					})
				}
			</div>
			<div>
				<input 
					value={value} 
					onChange={(e) => setValue(e.target.value)} 	
					placeholder='Write a message...'/>
				<i onClick={sendMessage} class="fa-solid fa-paper-plane"></i>
			</div>
		</div>
	)
}
export default Chat_field