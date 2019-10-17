import React from "react";
import styled from "styled-components";

const PageButton = styled.button`
    padding: 2px 10px;
    border: none;
    border-radius: 5px;
    background: white;
    font-size: 1.2rem;
    background: #FDDC81;
    transition: all .3s;
    
    &:hover {
        color: white;
        background: #FE9F32;
    }
`;

const Button = ({ setPage, page, value, text }) => {

return (
    <PageButton onClick={() => setPage(page === 1 && value === -1 ? 1 : page + value)}>{text}</PageButton>
);
};

export default Button;