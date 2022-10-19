import useGeolocation from "react-hook-geolocation";

const { kakao } = window;

function CustomOveray() {
  const { latitude, longitude } = useGeolocation({
    enableHighAccuracy: true,
    maximumAge: 150,
    timeout: 100,
  });

  const container = document.getElementById("map");
  const options = {
    center: new kakao.maps.LatLng(latitude, longitude),
    level: 2,
  };

  const position = new kakao.maps.LatLng(latitude, longitude);
  const map = new kakao.maps.Map(container, options);

  const content = (
    <div>
      <h1>ㅎㅇㅎㅇ</h1>
      <p>이 편지는 대한민국 서울 어느 곳에서 시작되어 랄라블라</p>
    </div>
  );

  const customOveray = new kakao.maps.CustomOverlay({
    position: position,
    content: content,
    xAnchor: 0.3,
    yAnchor: 0.91,
  });

  customOveray.setMap(map);
}

export default CustomOveray;
