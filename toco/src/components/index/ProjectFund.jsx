import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../../../src/hooks/useScrollFadeIn";
import { useHorizontalScroll } from "../../hooks/useHorizontalScroll";
import FundCard from "../fund/FundCard";
import { useRef, useEffect, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import Kimchi from "../../../public/ProjectImg/kimchi.png";
import Room from "../../../public/ProjectImg/room.png";
import Food from "../../../public/ProjectImg/food.png";
export default function ProjectFund() {
  const scrollRef = useHorizontalScroll();

  //1111

  const handleClick = () => {
    const container = scrollRef.current;
    container.scrollBy({ left: 350, behavior: "smooth" });
  };
  const handleClick2 = () => {
    const container = scrollRef.current;
    container.scrollBy({ left: -350, behavior: "smooth" });
  };

  const dummyUsers = [
    {
      p_funding_title: "김치 기부하기",
      p_funding_id: 1,
      p_funding_end_date: Date("2022-12-25"),
      p_funding_target_amont: 10,
    },
    {
      p_funding_title: "다른거 기부하기",
      p_funding_id: 1,
      p_funding_end_date: Date("2022-12-25"),
      p_funding_target_amont: 10,
    },
    {
      p_funding_title: "다른거2 기부하기",
      p_funding_id: 1,
      p_funding_end_date: Date("2022-12-25"),
      p_funding_target_amont: 10,
    },
  ];

  return (
    <Wrap>
      <Title>프로젝트 펀딩</Title>
      <ContainerWrap>
        <StyledDiv>
          <LeftButton onClick={handleClick2}>&lt;</LeftButton>
          <Container ref={scrollRef}>
            {dummyUsers.map((card) => (
              <FundCard
                title={card.p_funding_title}
                id={card.p_funding_id}
                date={card.p_funding_end_date}
                amount={card.p_funding_target_amont}
              />
            ))}
            <FundCard imgSrc={Kimchi} />
            <FundCard imgSrc={Room} />
            <FundCard imgSrc={Food} />
            <FundCard />
            <FundCard />
            <FundCard />
            <FundCard />
            <FundCard />
          </Container>
          <RightButton onClick={handleClick}>&gt;</RightButton>
        </StyledDiv>
      </ContainerWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  margin-top: 120px;

  width: 1345px;
`;
const ContainerWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 46px;
  background: linear-gradient(
    to top,
    #d16ba5 2.88%,
    #86a8e7 52.04%,
    #5ffbf1 97.27%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledDiv = styled.div`
  position: relative;
  margin-top: 40px;
  display: flex;
  height: 460px;
  width: 1090px;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  //가로스크롤
  display: flex;
  gap: 16px;
  height: 350px;
  overflow: hidden;
  touch-action: pan-x;
`;

const LeftButton = styled.button`
  position: absolute;
  top: 200px;
  left: 10px;
  padding: 10px 10px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #444;
  }
  transition: background-color 0.2s ease-in-out;
  z-index: 5;
`;

const RightButton = styled.button`
  position: absolute;
  top: 200px;
  right: 10px;
  padding: 10px 10px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #444;
  }
  transition: background-color 0.2s ease-in-out;
  z-index: 5;
`;
