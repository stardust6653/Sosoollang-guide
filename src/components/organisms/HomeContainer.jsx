import React from "react";
import styled from "styled-components";
import KakaoMap from "../atoms/KakaoMap";
import HomeContent from "../molecules/HomeContent";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 50vh;
  width: 100%;
`;

function HomeContainer() {
  return (
    <Container>
      <HomeContent />
    </Container>
  );
}

export default HomeContainer;
