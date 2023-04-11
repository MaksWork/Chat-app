import React, { useEffect, useState } from 'react'
import '../styles/Members.scss'
import { doc, getDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { ChatContext } from '../Contexts'; 


const Members = ({chat}) => {
	const {auth, db} = useContext(ChatContext)
	const chatRef = doc(db, 'chats', chat.chatId)

	const [chatMembers, setMembers] = useState();
	
 
	useEffect(() =>{
		
		const getChatMembers = async () =>{
			const chatInfo = await getDoc(chatRef)
			if(chatInfo.exists()){
				setMembers(chatInfo.data().chatMembers);
			}
		}

		getChatMembers()
	}, [chat])

	return(
		<div id='members_main_cont'>
			<div className='switch_cont'>
				<label className='members_title'>Chat Members</label>
			</div>
			<div className='members_cont'>
				<label>Members</label>
				{chatMembers &&
					chatMembers.map((member) =>{
						if(member.name === auth.currentUser.displayName){
							return(
								<div className='member'>
									<div className='member_labels'>
										<img src={member.avatar} alt=""/>
										<label>{member.name} (You)</label>
									</div>
									<div className='member_btns'>
										<button><i class="fa-solid fa-message"></i></button>
									</div>
								</div>
							)
						}
						else{

							return(
								<div className='member'>
									<div className='member_labels'>
										<img src={member.avatar} alt=""/>
										<label>{member.name}</label>
									</div>
									<div className='member_btns'>
										<button><i class="fa-solid fa-message"></i></button>
									</div>
								</div>
							)
						}
				})}
			</div>
		</div>
	)
}
export default Members;