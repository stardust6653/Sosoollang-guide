import React from "react";
import styled from "styled-components";
import Title from "../atoms/Title";
import Menu from "../molecules/Menu";

const Container = styled.header`
  width: 100%;
`;

function Header() {
  return (
    <Container>
      <Title />
      <Menu />
    </Container>
  );
}

export default Header;
