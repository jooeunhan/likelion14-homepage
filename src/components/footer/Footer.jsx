import React from "react";
import styled from "styled-components";
import copyrightLogo from "../../assets/images/copyright_image.svg";
import SkonIcon from "../../assets/icons/skon_icon.png";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 40px 32px;
  box-sizing: border-box;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

const LogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CopyrightImg = styled.img`
  height: 40px;
  width: auto;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const SkonIconImg = styled.img`
  width: 50px;
  height: auto;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <LeftSection>
        <LogoRow>
          <CopyrightImg src={copyrightLogo} alt="SKU LIKELION Copyright and Address" />
        </LogoRow>
      </LeftSection>

      <RightSection>
        <SkonIconImg src={SkonIcon} alt="icon" />
      </RightSection>
    </FooterContainer>
  );
}