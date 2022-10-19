import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Slide from "../atoms/Slide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import chinese from "../../assets/image/chinese.jpg";
import korean from "../../assets/image/korean.jpg";

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
`;

const Button = styled.button`
  all: unset;
  padding: 0 30px;
  color: black;
  border-radius: 10px;
  position: absolute;
  bottom: 45%;
  font-size: 30px;
  &:hover {
    transition: all 0.3s ease-in-out;
    color: #fff;
  }

  &:last-child {
    right: 0;
  }
`;

const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const TOTAL_SLIDES = 1;
function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);
  return (
    <Container>
      <SliderContainer ref={slideRef}>
        <Slide img={chinese} />
        <Slide img={korean} />
      </SliderContainer>
      <Button onClick={prevSlide}>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
      </Button>
      <Button onClick={nextSlide}>
        <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </Button>
    </Container>
  );
}

export default Slider;
