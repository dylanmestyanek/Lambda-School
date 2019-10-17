import React, { useState } from "react";
import styled from "styled-components";

import Form from "./Form";

const UserCard = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    height: 30px;
    margin: 20px auto;
    background: #B8E5FE;

    div {
        width: 300px;
        text-align: left;
    }

    button {
        border: none;
        padding: 5px 10px;

    }
`;

const Member = ({ member }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState(member);

    const editMember = (member) => {
        setIsEditing(false);
        setUser(member);
    }

    return(
        !isEditing ? 
            <UserCard>
                <div>Name: <span>{user.name}</span></div>
                <div>E-Mail: <span>{user.email}</span></div>
                <div>Role: <span>{user.role}</span></div>
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </UserCard>
        :   <Form editMember={editMember} member={member} />
    );
};

export default Member;