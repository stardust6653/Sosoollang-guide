import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { loginBoolean, logoutBoolean } from "../../store/atoms";
import BlogContent from "../molecules/BlogContent";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
`;

const WriteBtnMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  border-top: 1px solid #000;
  padding-top: 10px;
`;

const WriteBtn = styled.button`
  background-color: transparent;
  border: 0;
  margin-bottom: 10px;
  font-size: 13px;
  font-weight: 700;
  height: 70%;
  :hover {
    border-left: 2px solid #000;
    cursor: pointer;
  }
`;

function BlogContainer() {
  const [logout, setLogout] = useRecoilState(loginBoolean);
  const logoutBool = useRecoilValue(logoutBoolean);

  return (
    <Container>
      <WriteBtnMenu>
        {logout ? (
          <Link to="/write">
            <WriteBtn>글쓰기</WriteBtn>
          </Link>
        ) : (
          <Link to="/login">
            <WriteBtn>로그인하고 글을 써보세요!</WriteBtn>
          </Link>
        )}
      </WriteBtnMenu>
      <BlogContent />
      <BlogContent />
      <BlogContent />
      <BlogContent />
      <BlogContent />
      <BlogContent />
      <BlogContent />
    </Container>
  );
}

export default BlogContainer;
