import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/common/Button.jsx";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 76px 57px 0px 57px;
  align-self: stretch;
  box-sizing: border-box;
`;

const InnerSection = styled.div`
  width: 100%;
  border-bottom: 1px solid #1A1A1A;
  padding-bottom: 45px;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 28px;
  padding-right: 28px;
  width: 100%;
  box-sizing: border-box;
`;

const TitleBox = styled.div`
  position: relative;
  display: inline-flex;
  border: 1px solid #1A1A1A;
  padding: 8px 18px;
  margin-bottom: 17px;
`;

const TitleText = styled.h1`
  color: #1A1A1A;
  font-size: 36px;
  font-family: Pretendard;
  font-weight: 700;
  margin: 0;
`;

const Dot = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: #1A1A1A;
  
  top: ${props => props.$top && "-3px"};
  bottom: ${props => props.$bottom && "-3px"};
  left: ${props => props.$left && "-3px"};
  right: ${props => props.$right && "-3px"};
`;

const Description = styled.div`
  color: #1A1A1A;
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 500;
  margin-bottom: 59px; 
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 18px;
`;

export default function TopSection() {
  // 상태(useState)는 컨트롤러 역할을 해야 하므로 큰 형님인 TopSection이 꽉 쥐고 있습니다.
  const [activeGeneration, setActiveGeneration] = useState("14기");
  const generations = ["14기", "13기", "12기", "11기"];

  return (
    <Container>
      <InnerSection>
        <ContentWrapper>
          <TitleBox>
            <TitleText>구성원</TitleText>
            <Dot $top $left />
            <Dot $top $right />
            <Dot $bottom $left />
            <Dot $bottom $right />
          </TitleBox>

          <Description>
            서경대학교 멋쟁이사자처럼의 구성원들을 살펴보세요.
          </Description>
          
          <ButtonGroup>
            {generations.map((gen) => (
              <Button
                key={gen}
                $active={activeGeneration === gen}
                onClick={() => setActiveGeneration(gen)}
              >
                {gen}
              </Button>
            ))}
          </ButtonGroup>
        </ContentWrapper>
      </InnerSection>
    </Container>
  );
}