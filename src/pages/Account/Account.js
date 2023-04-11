import React, { useState } from "react";
import { useContext, useEffect } from "react";
import HorizontalNavbar from "../../components/UI/HorizontalNavbar/HorizontalNavbar";
import { doc, getDoc } from "firebase/firestore";
import { ChatContext } from "../../Contexts";
import "./Account.scss";

const Account = () => {
    const { auth, db } = useContext(ChatContext);
    const currentUserEmail = auth.currentUser.email;
    const currentUserLink = doc(db, "users", currentUserEmail);
    const curr_user = auth.currentUser;

    let [friends, setFriends] = useState();

    const getFriends = async () => {
        const docSnap = await getDoc(currentUserLink);

        return docSnap.data().friends;
    };

    useEffect(() => {
        const loadFriends = async () => {
            let friendsArray = await getFriends();

            setFriends(friendsArray);
        };

        loadFriends();
    }, []);

    return (
        <div className='account_info'>
            <HorizontalNavbar />
            <hr />
            <div className='main_info'>
                <div id='acc_info_left'>
                    <h1>Hello , {curr_user.displayName}!</h1>
                    <img src={curr_user.photoURL}></img>
                </div>
                <div id='acc_info_right'>
                    <label>Status: </label>
                    <label>Phone number: </label>
                    <label>Marital status: </label>
                    <label>About me: </label>
                </div>
            </div>
            <div className='friends_info_cont'>
                <h1>Friends</h1>
                {friends &&
                    friends.map((el) => {
                        console.log("hello");
						return(
							<div className='friend_cont'>
								<img src={el.avatar}></img>
								<label>{el.name}</label>
							</div>
						)
                    })}
            </div>
        </div>
    );
};
export default Account;
