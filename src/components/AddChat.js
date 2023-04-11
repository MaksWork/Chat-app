import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ChatContext } from '../Contexts';
import { db } from '../API/Firebase';
import { doc, getDoc } from 'firebase/firestore';

import '../styles/AddChat.scss'
import ChatDropDown from './UI/dropdown/ChatDropDown';

const AddChat = ({setVisible, setChats}) => {
	let [chatName, setChatName] = useState('');
	let [friends, setFriends] = useState([]);
	let [chatMembers, setChatMembers] = useState([])

	const {auth} = useContext(ChatContext);
	const currentUserEmail = auth.currentUser.email;
	const currentUserLink = doc(db, 'users', currentUserEmail);

	const getFriends = async () =>{
		const docSnap = await getDoc(currentUserLink)

		return docSnap.data().friends;
	}

	useEffect(() => {
		console.log(auth.currentUser);
		const loadFriends = async () =>{
			let friendsArray = await getFriends();
			console.log(friendsArray);
	
			setFriends(friendsArray);
		}

		loadFriends();
	}, [])

	const addFriendToChat = (friend) =>{
		const friend_checkbox = document.getElementById(`check_${friend.name}`)
		
		console.log(chatMembers)

		if(!chatMembers.some(e => e.name === friend.name)){
			setChatMembers([...chatMembers, friend])
			friend_checkbox.checked = true
		}
		else{
			setChatMembers([...chatMembers].filter(e => e.name !== friend.name))
			friend_checkbox.checked = false
		}
	}

	const addChat = () =>{
		const currentUserInfo = {avatar: auth.currentUser.photoURL, name: auth.currentUser.displayName}
		setChatMembers([...chatMembers, currentUserInfo])

		console.log(chatMembers);

		console.log(chatMembers);
		let chatOptions = {
			chatName,
			chatMembers
		}
		
		setChats(chatOptions);

		setChatName('')
		setVisible(false)
	}

	return(
		<div id='add_chat_container'>
			<input value={chatName} onChange={(e) => setChatName(e.target.value)} placeholder='Type name of chat...'/>
			<button onClick={addChat}>Add</button>
			<ChatDropDown title={'Add friends...'}>
				{friends.map((friend) => {
                    return (
                        <div onClick={() => addFriendToChat(friend)} className='add_friend_switch'>
                            <label>{friend.name}</label>
                            <input id={`check_${friend.name}`} type='checkbox'></input>
                        </div>
                    );
                })}
			</ChatDropDown>
		</div>
	)
}
export default AddChat