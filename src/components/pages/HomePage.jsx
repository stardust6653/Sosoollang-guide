import React from "react";
import styled from "styled-components";
import KakaoMap from "../atoms/KakaoMap";
import Slider from "../molecules/Slider";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import Layout from "../atoms/Layout";
import HomeContainer from "../organisms/HomeContainer";
const Div = styled.div`
  display: flex;
  margin-top: 5vh;
`;

function HomePage() {
  return (
    <Layout>
      <Header />
      <Slider />
      <HomeContainer />
      <Footer />
    </Layout>
  );
}

export default HomePage;
