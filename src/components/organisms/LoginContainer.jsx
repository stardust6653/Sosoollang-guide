import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Login from "../molecules/Login";

const ComponentTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  border: 1px solid #000;
  width: 100%;
`;

const P = styled.p``;

function LoginContainer() {
  return (
    <Container>
      <ComponentTitle>로그인</ComponentTitle>
      <Login />
      <Link to="/join">
        <P>아직 회원이 아니신가요? 회원가입</P>
      </Link>
    </Container>
  );
}

export default LoginContainer;
