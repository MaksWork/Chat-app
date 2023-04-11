import React from 'react';
import './Home.scss';

import logo from '../../imgs/logo/logo_v2.png'

const Home = () => {
	return(
		<div id='home_page'>
			<img src={logo}/>
			<span>Write something here</span> {/*TODO write smth here*/}
		</div>
	)
}
export default Home