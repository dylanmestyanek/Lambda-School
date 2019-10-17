import React, { useState, useEffect } from "react"

import authWithAxios from "../utils/authWithAxios"
import Friend from "./Friend"
import FriendForm from "./FriendForm"

const FriendsList = () => {
    const [friends, setFriends] = useState([])

    // Retrieves friends from localhost API, and sets them as 'friends' state
    useEffect(() => {
        authWithAxios().get("/friends")
            .then(res => setFriends(res.data))
            .catch(err => console.log(err.response))
    }, [friends.length])

    return (
        <>
            <h1>Friends List!</h1>
            <FriendForm friends={friends} setFriends={setFriends} />
            {
                friends.map((friend, idx) => <Friend key={idx} friend={friend} setFriends={setFriends} />)
            }
        </>
    )
}

export default FriendsList