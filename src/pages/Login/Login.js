import React, { useContext } from 'react'

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import './Login.scss'
import { ChatContext } from '../../Contexts';
import { addDoc, setDoc, collection, doc} from 'firebase/firestore';
import { db } from '../../API/Firebase';

const Login = () => {
	let {auth} = useContext(ChatContext)

	const login = async () =>{
		const provider = new GoogleAuthProvider();
		const user = await signInWithPopup(auth, provider)
		
		console.log(user.user);

		await setDoc(doc(db, 'users', user.user.email),{
			uid : user.user.providerData[0].uid,
			userName: user.user.displayName,
			avatar: user.user.photoURL,
			email: user.user.email,
			friends: []
		})
	}
	
	return(
		<div className='login-container'>
			<label>Login</label>
			<button onClick={login}>Login with Google</button>
		</div>
	)
}
export default Login