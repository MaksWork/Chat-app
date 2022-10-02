import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.scss'

const Navbar = () => {
	let navigate = useNavigate();
	
	return(
		<div className='nav-bar'>
			<ul>
				<li onClick={() => navigate('/messaging')} className='main-menu'><i class="fa-solid fa-bars"></i></li>
				<li><i class="fa-solid fa-comment-dots"></i></li>
				<li><i class="fa-solid fa-magnifying-glass"></i></li>
				<li onClick={() => navigate('/friends')}><i class="fa-solid fa-users"></i></li>
			</ul>
			<hr/>
		</div>
	)
}
export default Navbar