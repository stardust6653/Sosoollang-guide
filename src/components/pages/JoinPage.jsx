import React from "react";
import styled from "styled-components";
import Join from "../molecules/Join";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import Layout from "../atoms/Layout";

function JoinPage() {
  return (
    <Layout>
      <Header />
      <Join />
      <Footer />
    </Layout>
  );
}

export default JoinPage;
