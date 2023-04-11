import React from "react";
import "./ChatDropDown.scss";

const ChatDropDown = ({title, children}) => {
    
	const showDropDownContent = () =>{
		const dropDownContent = document.getElementsByClassName('drop_down_content');

		if(dropDownContent[0].classList.contains('invisible')){
			dropDownContent[0].classList.remove('invisible');
		}
		else{
			dropDownContent[0].classList.add('invisible');
		}
	}
	

	return (
        <div className='drop_down'>
            <button onClick={showDropDownContent} className='drop_down_button'>
                {title} <i class='fa-solid fa-chevron-down'></i>
            </button>
            <div className='drop_down_content invisible'>
                {children}
            </div>
        </div>
    );
};
export default ChatDropDown;
