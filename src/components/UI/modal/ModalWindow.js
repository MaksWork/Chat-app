import React from 'react'

import './ModalWindow.scss'

const ModalWindow = ({children, isVisible, setVisible}) => {
	
	let active = ''
	if(isVisible){
		active = 'active';
	}

	
	return(
		<div onClick={() => setVisible(false)} id='modal-container' className={active}>
			{/* TODO <i class="fa-solid fa-xmark"></i> */}
			<div id='modal-content' onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}
export default ModalWindow