import React from "react";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import Layout from "../atoms/Layout";
import { Link } from "react-router-dom";

const Error = styled.div`
  text-align: center;
  width: 50%;
  height: 50%;
  padding: 100px;
  font-size: 300px;
`;

const Comment = styled.p`
  font-size: 30px;
`;

function ErrorPage() {
  return (
    <Layout>
      <Header />
      <Error>
        <FontAwesomeIcon icon={faBan} style={{ marginBottom: "5%" }} />
        <Link to="/">
          <Comment>잘못오셨어요! 눌러서 돌아가기</Comment>
        </Link>
      </Error>
      <Footer />
    </Layout>
  );
}

export default ErrorPage;
