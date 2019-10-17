import React from "react"
import styled from "styled-components"

class Card extends React.Component {

    render(){
        return(
            <CharacterCard>
                <img src={this.props.user.avatar_url} alt="GitHub User" />
                <CharacterText>
                    <h2>{this.props.user.name}</h2>
                    <p><em>{this.props.user.login}</em></p>
                    <p>{this.props.user.location ? this.props.user.location : <em>null</em>}</p>
                    <p>Profile: <a href={this.props.user.html_url}>{this.props.user.html_url}</a></p>
                    <p>Followers: {this.props.user.followers}</p>
                    <p>Following: {this.props.user.following}</p>
                    <p>Bio: {this.props.user.bio}</p>
                </CharacterText>
            </CharacterCard>
        );
    }
}

export default Card

const CharacterCard = styled.div`
position: relative;
    width: 40%;
    background: linear-gradient(#8BDBD8, #407C9F);
    display: flex;
    align-items: center;
    margin: 20px;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 5px 5px 10px 1px black;

    img {
        width: 30%;
        border-radius: 3px;
    }
`;

const CharacterText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    box-sizing: border-box;
    padding-left: 10px;

    h2 {
        font-size: 1.5rem;
        margin: 0;
        margin-top: -5px;
    }

    p {
        font-size: .8rem;
        margin: 1px 0;
    }
`;

const GitButton = styled.button`
    position: absolute;
    width: 150px;
    left: 40%;
    top: 80%;
    border: none;
    background: #8BDBD8;
    border-radius: 5px;
    padding: 5px 0;
    transition: all .3s;

    &:hover {
        background: #247B66;
        color: white;
    }
`;