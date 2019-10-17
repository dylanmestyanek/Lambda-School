import React, { useState } from "react"
import authWithAxios from "../utils/authWithAxios"

import FriendForm from "./FriendForm"

const Friend = ({ friend, setFriends }) => {
    const [isEditing, setIsEditing] = useState(false)

    // Deletes friend using the ID of that friend
    const deleteFriend = (id) => {
        authWithAxios().delete(`/friends/${id}`)
            .then(res => setFriends(res.data))
            .catch(err => console.log(err))
    }

    // If a friend is NOT being edited, render their information in a 'div card'
    // If a friend IS being edited, render a FriendForm, and send in the 'friend'
    // object as 'friendToUpdate' which will populate the form with that info
    return (
       !isEditing ? 
        <div>
            <h2>{friend.name}</h2>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
            <button onClick={() => deleteFriend(friend.id)}>Bye-Bye Friend!</button>
            <button onClick={() => setIsEditing(!isEditing)}>Edit Friend!</button>
        </div> 
        : <FriendForm friendToUpdate={friend} setFriends={setFriends} setIsEditing={setIsEditing} />
    )
}

export default Friend