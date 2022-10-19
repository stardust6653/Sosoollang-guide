import React from "react";
import styled from "styled-components";
import "../../App.css";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: 90px;
  background-color: #e7e3d5;
  font-family: Sunflower;
`;

const H1 = styled.h1`
  font-size: 30px;
`;

function Title() {
  return (
    <Container>
      <H1>소술랭 가이드</H1>
    </Container>
  );
}

export default Title;
