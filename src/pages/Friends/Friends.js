import { updateDoc, doc, collection, getDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../API/Firebase";
import UserManipulacionBar from "../../components/UserManipulacionBar";
import { ChatContext } from "../../Contexts";
import { uniqueValuesInArray } from "../../utils";
import "./Friends.scss";

const Friends = () => {
    const { auth } = useContext(ChatContext);
    const currentUserEmail = auth.currentUser.email;
    const currentUserLink = doc(db, "users", currentUserEmail);

    const [users, userLoading] = useCollection(collection(db, "users"));

    let [displayFriends, setFriends] = useState([]);
    let [displayUsers, setUsers] = useState([]);
    let [searchQuery, setSearchQuery] = useState("");

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

	useEffect(() => {
		if (users) {
			let users_a = []
			users.docs.map((doc) => {
				users_a.push(doc.data())
			});

			users_a.filter((el) => el.email !== currentUserEmail)
			console.log(users_a);

			setUsers(users_a)
		}
	}, [users]) 

    useEffect(() => {
        console.log(displayUsers);
    }, [searchQuery]);

    const addFriend = async (friend) => {
        let friendsArray = await getFriends();
        let newFriendsArray = [...friendsArray, friend];

        setFriends(newFriendsArray.filter(uniqueValuesInArray));

        await updateDoc(currentUserLink, {
            friends: newFriendsArray,
        });
    };

    const deleteFriend = async (friend) => {
        setFriends(
            displayFriends.filter((e) => {
                return e.name !== friend.name;
            })
        );

        await updateDoc(currentUserLink, {
            friends: displayFriends.filter((e) => {
                return e.name !== friend.name;
            }),
        });
    };

    return (
        <div id='friends_page_cont'>
            <label className='title'>Friends</label>
            {displayFriends.map((friend) => {
                return (
                    <UserManipulacionBar
                        key={Math.random()}
                        deleteFromFriends={(friend) => deleteFriend(friend)}
                        name={friend.name}
                        avatar={friend.avatar}
                        friend={true}
                    />
                );
            })}

            <hr />
            <label className='title'>All Users</label>
            <input
                placeholder='Search user...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}></input>
            <div>
                {users &&
                    users.docs.map((doc) => {
                        if (
                            doc.data().userName !== auth.currentUser.displayName
                        ) {
                            if (
                                !displayFriends.length ||
                                displayFriends.some(
                                    (e) => e.name !== doc.data().userName
                                )
                            ) {
                                return (
                                    <UserManipulacionBar
                                        key={Math.random()}
                                        addToFriends={(friend) =>
                                            addFriend(friend)
                                        }
                                        name={doc.data().userName}
                                        avatar={doc.data().avatar}
                                        friend={false}
                                    />
                                );
                            }
                        }
                    })}
            </div>
        </div>
    );
};
export default Friends;
