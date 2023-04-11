import React from "react";
import './HorizontalNavbar.scss';
import { useContext } from "react";
import { ChatContext } from "../../../Contexts";
import { Link } from "react-router-dom";

const HorizontalNavbar = () => {
    const { auth } = useContext(ChatContext);

	const showHideDropDown = () =>{
        const drop_down = document.getElementById('dropdown-content')

        if(drop_down.style.display == 'none'){
            drop_down.style.display = 'flex'
        }
        else{
            drop_down.style.display = 'none'
        }
    }
	
	return (
        <div className='top-nav'>
            <label>
                <i class='fa-solid fa-comment-dots'></i>
                Messaging
            </label>
            <div className='top-nav-right'>
                <i class='fa-regular fa-bell'></i>
                <i
                    onClick={showHideDropDown}
                    class='fa-regular fa-circle-user'></i>
                <div id='dropdown-content'>
                    <Link to={"/account"}>Go to Account</Link>
                    <Link onClick={() => auth.singOut()}>Sing out</Link>
                </div>
            </div>
        </div>
    );
};
export default HorizontalNavbar;
