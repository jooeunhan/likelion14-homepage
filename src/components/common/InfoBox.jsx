import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 216px;
  border: 2px solid #1A1A1A;
  box-sizing: border-box;
`;

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: #F9F9F9;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 18px 24px;
  background-color: #F8FBE7;
  border-top: 2px solid #1A1A1A;
  box-sizing: border-box;
`;

const NameText = styled.div`
  color: #1A1A1A;
  font-family: Pretendard
  font-size: 22px;
  font-weight: 700;
  font-style: normal;
  margin-bottom: 9px;
`;

const DetailText = styled.div`
  color: #1A1A1A;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
`;

export default function InfoBox({ member }) {
  return (
    <CardContainer>
      <ImageWrapper>
        <ProfileImg src={member.image} alt={`${member.name} 프로필`} />
      </ImageWrapper>

      <InfoWrapper>
        <NameText>{member.name}</NameText>
        <DetailText>
          {member.department}<br></br>{member.studentId}
        </DetailText>
      </InfoWrapper>
    </CardContainer>
  );
}