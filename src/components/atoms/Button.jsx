import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  padding: 10px 10px;
  font-size: 15px;
  margin: 0 25px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  :hover {
    border-bottom: 2px solid black;
    padding: 10px 10px 8px;
  }
`;

function Button({ text, onClick }) {
  return <Btn onClick={onClick}>{text}</Btn>;
}

export default Button;
