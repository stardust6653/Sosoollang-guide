import "../../App.css";
import styled from "styled-components";

const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

const ContentContainer = styled.div`
  width: 100%;
  border: 1px solid #000;
  border-radius: 10px;
  margin: 0 0 20px;
`;

const ContentTitle = styled.h2`
  font-size: 20px;
  font-family: Sunflower;
  padding: 30px 0 0 30px;
`;

const Content = styled.p`
  margin-top: 15px;
  font-size: 18px;
  font-family: OpenSans;
  padding: 0 30px 30px;
`;

const Info = styled.span`
  font-size: 15px;
  margin-top: 10px;
  display: inline-block;
  margin-top: 15px;
  padding-left: 30px;
`;

function BlogContent() {
  return (
    <ContentContainer>
      <ContentTitle>맛있게 맵다. 태양초 고추장</ContentTitle>
      <Info>{JSON.parse(localStorage.getItem("id"))}</Info>
      <Info>{year + "-" + month + "-" + day}</Info>

      <Content>
        청정원이었나에서 만들었던 태양초 고추장을 드디어 먹어봤다. 한 20년 이상 전쯤...
      </Content>
    </ContentContainer>
  );
}

export default BlogContent;
