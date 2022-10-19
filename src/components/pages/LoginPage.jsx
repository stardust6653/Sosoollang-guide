import React from "react";
import styled from "styled-components";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import LoginContainer from "../organisms/LoginContainer";
import Layout from "../atoms/Layout";

function LoginPage() {
  return (
    <Layout>
      <Header />
      <LoginContainer />
      <Footer />
    </Layout>
  );
}

export default LoginPage;
