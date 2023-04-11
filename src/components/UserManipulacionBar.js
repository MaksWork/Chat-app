import React from 'react'

import '../styles/UserManipulacionBar.scss';
import ChatButton from './UI/button/ChatButton';

const UserManipulacionBar = ({addToFriends, deleteFromFriends, name, avatar, friend}) => {

	const setVisible = () => {
		let div = document.getElementsByClassName(name);
		div[0].classList.add('invisible');
	}

	const addFriend = () =>{
		addToFriends({name, avatar})
		setVisible();
	}

	const deleteFriend = () =>{
		deleteFromFriends({name, avatar})
	}

	return(
		<div className={`user_bar ${name}`}>
			<div className='user_bar_content'>
				<img src={avatar}/>
				<label>{name}</label>
				
			</div>
			<div className='right-buttons'>
				<ChatButton onClick={addFriend}><i class="fa-solid fa-plus"></i></ChatButton>
				{friend 
					? <ChatButton onClick={deleteFriend}><i class="fa-solid fa-xmark"></i></ChatButton>
				 	: <ChatButton onClick={setVisible}><i class="fa-solid fa-eye-slash"></i></ChatButton>
				} 
				
			</div>
		</div>
	)
}
export default UserManipulacionBar