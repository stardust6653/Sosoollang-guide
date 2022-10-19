import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { selector, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { loginBoolean, logoutBoolean } from "../../store/atoms";
import Button from "../atoms/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 50vw;
  padding: 10px 0;
`;

function Menu() {
  const [logout, setLogout] = useRecoilState(loginBoolean);
  const logoutBool = useRecoilValue(logoutBoolean);

  function onClick() {
    setLogout(logoutBool);
  }

  return (
    <Container>
      <Link to="/">
        <Button text="Home" />
      </Link>
      <Link to="/blog">
        <Button text="Blog" />
      </Link>
      {logout ? (
        <Link to="/mypage">
          <Button text="My Page" />
        </Link>
      ) : null}
      {logout ? (
        <Link to="/">
          <Button text="Logout" onClick={onClick} />
        </Link>
      ) : (
        <Link to="/login">
          <Button text="Login" />
        </Link>
      )}
    </Container>
  );
}

export default Menu;
