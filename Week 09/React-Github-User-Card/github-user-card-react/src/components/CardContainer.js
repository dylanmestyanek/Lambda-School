import React from "react"
import Card from "./Card"
import styled from "styled-components"

class CardContainer extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <UserListContainer>
                <h1>GitHub User Cards!</h1>
                <UserList>
                    {
                        this.props.user.map(user => <Card user={user} />)
                    }
                </UserList>
            </UserListContainer>
        )
    }
}

export default CardContainer

const UserListContainer = styled.div`
    width: 100%;
    background: #247B66;
    margin: 0 auto;

    h1 {
        text-align: center;
        background: #247b66;
        margin: 0;
        padding-top: 20px;
    }
`;

const UserList = styled.div`
    width: 80%;
    margin: 0 auto;
    padding-top: 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

