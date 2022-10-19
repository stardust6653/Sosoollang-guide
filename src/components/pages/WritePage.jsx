import React from "react";
import styled from "styled-components";

import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import Layout from "../atoms/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
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

function WritePage() {
  return (
    <Layout>
      <Header />
      <Error>
        <FontAwesomeIcon icon={faWrench} style={{ marginBottom: "5%" }} />
        <Link to="/">
          <Comment>공사중이에요..! 돌아가세요</Comment>
        </Link>
      </Error>
      <Footer />
    </Layout>
  );
}

export default WritePage;
