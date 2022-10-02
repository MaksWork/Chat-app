import React, { useContext } from 'react'

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import './Login.scss'
import { ChatContext } from '../../Contexts';

const Login = () => { //TODO on login add to database 
	let {auth} = useContext(ChatContext)

	const login = async () =>{
		const provider = new GoogleAuthProvider();
		const user = await signInWithPopup(auth, provider)
	}
	
	return(
		<div className='login-container'>
			<label>Login</label>
			<button onClick={login}>Login with Google</button>
		</div>
	)
}
export default Login