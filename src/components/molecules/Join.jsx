import { useForm } from "react-hook-form";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { Link, useFormAction, useNavigate } from "react-router-dom";

const JoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #000;
  padding-bottom: 2%;
  text-align: center;
  height: 100%;
  width: 100%;
`;

const H2 = styled.h2`
  font-weight: 700;
  font-size: 30px;
  margin: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20vw;
`;

const Input = styled.input`
  width: 60%;
  margin-bottom: 10px;
  padding: 0;
  border: 0;
  border-bottom: 1px solid #000;
  height: 30px;
  padding-bottom: 0px;
  font-size: 18px;
  text-align: center;
  outline: none;
`;

const Select = styled.select`
  width: 60%;
  margin-bottom: 10px;
  height: 30px;
  font-size: 15px;
  text-align: center;
  outline: none;
  border: none;
`;

const Label = styled.label`
  text-align: start;
  width: 60%;
  font-size: 18px;
  margin-bottom: 5px;
  font-weight: 600;
`;

const Button = styled.button`
  margin-top: 30px;
  padding: 10px 20px 10px;
  font-size: 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  :hover {
    border-bottom: 2px solid black;
    padding: 10px 20px 8px;
  }
`;

const Error = styled.p`
  color: #d63a3a;
  font-size: 13px;
`;

const schema = yup
  .object()
  .shape({
    id: yup
      .string()
      .min(5, "아이디를 5~15자 사이로 입력해주세요.")
      .max(15, "아이디를 5~15자 사이로 입력해주세요.")
      .required("아이디를 입력해주세요."),
    password: yup
      .string()
      .min(8, "비밀번호를 8~15자 사이로 입력해주세요.")
      .max(15, "비밀번호를 8~15자 사이로 입력해주세요.")
      .required("비밀번호를 입력해주세요."),
    checkPassword: yup
      .string()
      .oneOf([yup.ref("password")], "비밀번호가 다릅니다.")
      .required("비밀번호를 다시 한 번 입력해주세요."),
  })
  .required();

function Join() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  // 원래는 객체형태로 저장하고 구분이 가능하도록 userId 가 필요하지만 편의상 로컬스토리지를 활용해 한 ID만 사용
  const onSubmit = data => {
    if (data["id"] === JSON.parse(localStorage.getItem("id"))) {
      alert("이미 사용 중인 ID입니다.");
    } else {
      for (let key in data) {
        localStorage.setItem(key, JSON.stringify(data[key]));
      }
      alert("회원가입을 축하드립니다! 로그인 후 이용해 주세요!");
      localStorage.removeItem("checkPassword");
      navigate("/login");
    }
  };

  return (
    <JoinContainer>
      <H2>회원가입</H2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label for="id">아이디</Label>
        <Input id="id" {...register("id")} />
        <Error>{errors.id?.message}</Error>
        <br />
        <Label for="gender">성별</Label>
        <Select id="gender" {...register("gender")}>
          <option value="여성">여성</option>
          <option value="남성">남성</option>
          <option value="그 외">그 외</option>
          <option value="미선택">선택하지 않음</option>
        </Select>
        <br />
        <Label for="password">비밀번호</Label>
        <Input id="password" type="password" {...register("password")} />
        <Error>{errors.password?.message}</Error>
        <br />
        <Label for="checkPassword">비밀번호 확인</Label>
        <Input id="checkPassword" type="password" {...register("checkPassword")} />
        <Error>{errors.checkPassword?.message}</Error>
        <br />
        <Button onSubmit={onSubmit}>회원가입</Button>
      </Form>
    </JoinContainer>
  );
}

export default Join;
