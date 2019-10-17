import React from "react"

const UserCard = ({ user, index }) => {
    return( 
        <div className="user-card" key={index}>
            <div>
                <p>User:</p>
                <p className="info">{user.username}</p>
            </div>
            <div>
                <p>E-mail:</p>
                <p className="info">{user.email}</p>
            </div>
            <div>
                <p>Role:</p>
                <p className="info">{user.role}</p>
            </div>
        </div>
    );
};

export default UserCard;