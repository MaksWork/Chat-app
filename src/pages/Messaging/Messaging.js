import React, { useContext, useState } from 'react'

import './Messaging.scss'
import Chats from '../../components/Chats'
import { ChatContext } from '../../Contexts'
import Navbar from '../../components/UI/navbar/Navbar'
import Chat_field from '../../components/ChatField'

const Messaging = () => { {/*TODO create chat system*/}
	const {auth} = useContext(ChatContext)
	let [currentChat, setCurrentChat] = useState('test')
	
	return(
		<div className='main-container'>
			<div className='top-nav'>
				<label>
					<i class="fa-solid fa-comment-dots"></i>
					Messaging
				</label>
				<div className='top-nav-right'>
					<i class="fa-regular fa-bell"></i>
					<i onClick={() => auth.signOut()} class="fa-regular fa-circle-user"></i>
				</div>
			</div>
			<hr className='horizont-hr'/>
			<div className='center-field'>
				<Chats setChat={setCurrentChat}/>
				<hr/>
				
				<Chat_field chat={currentChat}/>
				
				<hr/>

				<div className='members-cont'></div>
			</div>
		</div>
	)
}
export default Messaging