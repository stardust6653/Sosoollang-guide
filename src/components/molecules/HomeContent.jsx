import styled from "styled-components";
import KakaoMap from "../atoms/KakaoMap";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
  border: 1px solid #000;
  overflow: scroll;
`;

const MapContainer = styled.div`
  width: 50%;
  height: 100%;
  border: 1px solid #000;
`;

const FavoriteDiningContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 400px;
  border: 1px solid #000;
  border-radius: 30px;
  margin: 20px 0;
`;

const ContentTitle = styled.h2`
  font-size: 20px;
  font-family: Sunflower;
  margin-top: 30px;
`;

const Content = styled.p`
  margin-top: 15px;
  font-size: 16px;
  font-family: OpenSans;
  padding: 0 30px 30px;
  line-height: 25px;
`;

const Info = styled.span`
  font-size: 12px;
  margin-bottom: 15px;
  display: inline-block;
`;

function HomeContent() {
  return (
    <>
      <Container>
        <FavoriteDiningContainer>
          <ContentTitle>더 착한 커피</ContentTitle>
          <Content>
            근방에 있는 유일한 커피집으로 생각보다 맛있어서 놀랬다. <br />
            카페가 있음에 감사함.
          </Content>
          <Info>서울시 영등포구 대림동</Info>
        </FavoriteDiningContainer>
        <FavoriteDiningContainer>
          <ContentTitle>더 착한 커피</ContentTitle>
          <Content>
            근방에 있는 유일한 커피집으로 생각보다 맛있어서 놀랬다. <br />
            카페가 있음에 감사함.
          </Content>
          <Info>서울시 영등포구 대림동</Info>
        </FavoriteDiningContainer>
        <FavoriteDiningContainer>
          <ContentTitle>더 착한 커피</ContentTitle>
          <Content>
            근방에 있는 유일한 커피집으로 생각보다 맛있어서 놀랬다. <br />
            카페가 있음에 감사함.
          </Content>
          <Info>서울시 영등포구 대림동</Info>
        </FavoriteDiningContainer>
      </Container>
      <MapContainer>
        <KakaoMap />
      </MapContainer>
    </>
  );
}

export default HomeContent;
