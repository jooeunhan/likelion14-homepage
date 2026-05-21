import React from "react";
import styled from "styled-components";
import InfoBox from "../components/common/InfoBox.jsx"; 
import memberDummy from "../../public/memberDummy.js";
import Bulb from "../../src/assets/images/bulb_image.svg";
import Eyes from "../../src/assets/images/eye_image.svg";
import Dog from "../../src/assets/images/dog_image.svg";

const MembersContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 82px 85px 0px 85px; 
  background-color: #FAFBF8;
  box-sizing: border-box;
`;

const BackgroundImage = styled.img`
  position: absolute;
  z-index: 0;
  opacity: 0.5;
  width: 600px;
`;

const Image1 = styled(BackgroundImage)`
  top: 100px;
  left: 50px;
`;

const Image2= styled(BackgroundImage)`
  bottom: 200px;
  right: 150px;
`;

const Image3= styled(BackgroundImage)`
  bottom: 150px;
  right: 100px;
`;

const CategorySection = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 60px;
`;

const CategoryTitle = styled.h2`
  color: #1A1A1A;
  font-family: Pretendard;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 47px; 
`;

const ExecutiveRow = styled.div`
  display: flex;
  gap: 22px;
  width: 100%;
  margin-bottom: 83px;
`;

const IndividualPartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PartSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 83px;
`;

const PartTitle = styled.h3`
  color: #1A1A1A;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 21px; 
`;

const CardGrid = styled.div`
  display: flex;
  gap: 22px;
  flex-wrap: wrap;
  width: 100%;
`;

export default function Members({ activeGeneration }) {
  const currentGenNumber = parseInt(activeGeneration);

  const currentGenMembers = memberDummy.filter(
    (member) => member.generation === currentGenNumber
  );

  const categories = ["운영진", "아기사자"];
  const parts = ["대표", "부대표", "PO", "FRONTEND", "BACKEND"];

  return (
    <MembersContainer>
      <Image1 src={Bulb} alt="" />
      <Image2 src={Eyes} alt="" />
      <Image3 src={Dog} alt="" />

      {categories.map((category) => {
        const categoryMembers = currentGenMembers.filter(m => m.category === category);
        if (categoryMembers.length === 0) return null;

        const dynamicParts = [
          ...new Set(categoryMembers.map((m) => m.part))
        ];

        const leaderMember = categoryMembers.find(m => m.part === "대표");
        const subLeaderMember = categoryMembers.find(m => m.part === "부대표");
        const hasExecutives = leaderMember || subLeaderMember;

        const generalParts = dynamicParts.filter(
          (part) => part !== "대표" && part !== "부대표"
        );

        return (
          <CategorySection key={category}>
            <CategoryTitle>{category}</CategoryTitle>

            {hasExecutives && (
              <ExecutiveRow>
                {leaderMember && (
                  <IndividualPartContainer>
                    <PartTitle>대표</PartTitle>
                    <InfoBox member={leaderMember} />
                  </IndividualPartContainer>
                )}
                {subLeaderMember && (
                  <IndividualPartContainer>
                    <PartTitle>부대표</PartTitle>
                    <InfoBox member={subLeaderMember} />
                  </IndividualPartContainer>
                )}
              </ExecutiveRow>
            )}

            {generalParts.map((part) => {
              const finalMembers = categoryMembers.filter(m => m.part === part);
              if (finalMembers.length === 0) return null;

              return (
                <PartSection key={part}>
                  <PartTitle>{part}</PartTitle>
                  <CardGrid style={{ position: 'relative', zIndex: 1 }}>
                    {finalMembers.map((member) => (
                      <InfoBox key={member.id} member={member} />
                    ))}
                  </CardGrid>
                </PartSection>
              );
            })}
          </CategorySection>
        );
      })}
    </MembersContainer>
  );
}