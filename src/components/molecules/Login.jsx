import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { loginBoolean } from "../../store/atoms";

const Form = styled.form`
  position: relative;

  padding-bottom: 50px;
`;

const Label = styled.label`
  font-weight: 700;
  margin-right: 20px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #000;
  outline: none;
  font-size: 20px;
  margin: 20px 0;
  width: 100%;
  text-align: center;
`;

const Button = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 15px;
  position: absolute;
  right: 0;

  :hover {
    border-bottom: 1px solid #000;
    cursor: pointer;
  }
`;

function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useRecoilState(loginBoolean);

  const [inputId, setInputId] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    if (
      localStorage.getItem("id") === JSON.stringify(inputId) &&
      localStorage.getItem("password") === JSON.stringify(inputPassword)
    ) {
      setLogin("true");
      navigate("/");
    } else {
      alert("아이디 혹은 비밀번호가 틀렸습니다. 다시 입력해주세요.");
    }
  }

  function checkId(event) {
    setInputId(event.target.value);
  }

  function checkPassword(event) {
    setInputPassword(event.target.value);
  }

  return (
    <Form onSubmit={onSubmit}>
      <Label for="id">아이디</Label>
      <Input id="id" type="text" onChange={checkId} />
      <br />
      <Label for="password">비밀번호</Label>
      <Input id="password" type="password" onChange={checkPassword} />
      <br />
      <Button>로그인</Button>
    </Form>
  );
}

export default Login;
