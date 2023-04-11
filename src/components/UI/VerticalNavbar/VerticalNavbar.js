import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './VerticalNavbar.scss'

const VerticalNavbar = () => {
	let navigate = useNavigate();
	
	return(
		<div className='nav-bar'>
			<ul>
				<li onClick={() => navigate('/home')} className='main-menu'><i class="fa-solid fa-bars"></i></li>
				<li onClick={() => navigate('/messaging')}><i class="fa-solid fa-comment-dots"></i></li>
				<li><i class="fa-solid fa-magnifying-glass"></i></li>
				<li onClick={() => navigate('/friends')}><i class="fa-solid fa-users"></i></li>
			</ul>
			<hr/>
		</div>
	)
}
export default VerticalNavbar