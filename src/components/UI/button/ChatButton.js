import React from 'react'

import './ChatButton.scss';

const ChatButton = ({children, ...props}) => {
	return(
		<button className='chat_button' {...props}>{children}</button>
	)
}
export default ChatButton