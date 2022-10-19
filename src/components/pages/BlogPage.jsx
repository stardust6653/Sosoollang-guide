import React from "react";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import styled from "styled-components";
import Layout from "../atoms/Layout";
import BlogContainer from "../organisms/BlogContainer";

function BlogPage() {
  return (
    <Layout>
      <Header />
      <BlogContainer />
      <Footer />
    </Layout>
  );
}

export default BlogPage;
