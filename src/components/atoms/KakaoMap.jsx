import React, { useEffect } from "react";
import useGeolocation from "react-hook-geolocation";

const { kakao } = window;

function KakaoMap() {
  // 좌표
  const { latitude, longitude } = useGeolocation({
    enableHighAccuracy: true,
    maximumAge: 15000,
    timeout: 12000,
  });

  // 맵 생성
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: 2,
    };
    const map = new kakao.maps.Map(container, options);

    // 마커 생성
    const markerPosition = new kakao.maps.LatLng(latitude, longitude);

    const markerImage = new kakao.maps.MarkerImage(
      "https://cdn-icons-png.flaticon.com/512/76/76769.png",
      new kakao.maps.Size(31, 35),
      {
        offset: new kakao.maps.Point(16, 34),
        shape: "poly",
        coords: "1,20,1,9,5,2,10,0,21,0,27,3,30,9,30,20,17,33,14,33",
      }
    );
    const marker = new kakao.maps.Marker({
      image: markerImage,
      position: markerPosition,
      clickable: true,
    });

    marker.setMap(map);

    // 인포 생성
    const iwContent =
      '<div style="padding:5px; width: 200px; height: 30px; text-align: center; line-height: 35px;">당신은 지금 여기 있어요!</div>';
    const iwRemoveable = true;

    const infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable,
    });

    kakao.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  });

  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "100%",
      }}
    ></div>
  );
}

export default KakaoMap;
