import React, { useState } from "react"

import authWithAxios from "../utils/authWithAxios"
import Friend from "./Friend"

const FriendForm = ({ 
    setFriends, 
    friendToUpdate, 
    setIsEditing 
}) => {
    // If receiving 'friendToUpdate' info from Friend.js, set that as the 'friendInfo' state
    // which will populate the form with that info, OTHERWISE, set 'friendInfo' as an empty object 
    const [friendInfo, setFriendInfo] = useState( friendToUpdate ? friendToUpdate : {
        name: '',
        age: '',
        email: '',
        id: Date.now()
    })

    const handleChange = e => {
        const {name, value} = e.target
        setFriendInfo({
            ...friendInfo,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        // If you AREN'T updating a friend's info, add the 'friendInfo' object as a new friend to the API data
        if (!friendToUpdate){
            authWithAxios().post("/friends", friendInfo)
                .then(res => setFriends(res.data))
                .catch(err => console.log(err.response))
        } else {
            // If you ARE editing a friend send a 'axios.put' request, with the UPDATED 'friendInfo' object
            authWithAxios().put(`/friends/${friendToUpdate.id}`, friendInfo)
                .then(res => setFriends(res.data))
                .catch(err => console.log(err))
            setIsEditing(false)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="name"
                placeholder="Name"
                value={friendInfo.name}
                onChange={handleChange}
            />
            <input 
                type="number"
                name="age"
                placeholder="Age"
                value={friendInfo.age}
                onChange={handleChange}
            />
            <input 
                type="email"
                name="email"
                placeholder="Email"
                value={friendInfo.email}
                onChange={handleChange}
            />
            <button type="submit">{friendToUpdate ? 'Update Friend!' : 'Add Friend!'}</button>
        </form>
    )
}

export default FriendForm