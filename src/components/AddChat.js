import React, { useState } from 'react'

import '../styles/AddChat.scss'

const AddChat = ({setVisible, setChats}) => {
	let [chatName, setChatName] = useState('');

	const addChat = () =>{
		setChats(chatName);
		setChatName('')
		setVisible(false)
	}


	return(
		<div id='add_chat_container'>
			<input value={chatName} onChange={(e) => setChatName(e.target.value)} placeholder='Type name of chat...'/>
			<button onClick={addChat}>Add</button>
		</div>
	)
}
export default AddChat