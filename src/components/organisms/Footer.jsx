import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  background-color: #e7e3d5;
  width: 100%;
  height: 130px;
`;

const Content = styled.p`
  font-size: 15px;
  color: #333;
  padding: 30px;
`;

const Link = styled.a`
  display: inline-block;
  padding-bottom: 12px;
  :active {
    color: #333;
    text-decoration: none;
  }
  :hover {
    color: #000;
  }
  :visited {
    color: #333;
    text-decoration: none;
  }
`;

function Footer() {
  return (
    <Container>
      <Content>
        <h3>소술랭 가이드</h3>
        <br />
        <Link href="https://github.com/stardust6653/Sosoollang-guide">프로젝트 깃헙페이지</Link>
        <br />
        <Link href="https://www.notion.so/sobak/ca54d86fd90d4a9b9e4048389e666918">노션페이지</Link>
      </Content>
    </Container>
  );
}

export default Footer;
