import React from "react";
import styled from "styled-components";
import homeUrl from "../../assets/icons/skull_icon.svg";
import { useLocation, useNavigate } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 76px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px #1A1A1A solid;
  box-sizing: border-box;
`;

const TitleContainer = styled.div`
  display: flex;
  height: 100%;
  width: 408px;
  padding: 0 24px;
  border-right: 1px #1A1A1A solid;
  justify-content: center;
  align-items: center;
  gap: 16px;
  box-sizing: border-box;
`;

const HomeIcon = styled.img`
  width: 46px;
  height: 46px;
  cursor: pointer;
`;

const MainTitle = styled.span`
  color: #1A1A1A;
  font-size: 22px;
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  cursor: pointer;
`;

const RightSection = styled.div`
  display: flex;
  height: 100%;
`;

const MenuContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 0 48px;
  border-left: 1px #1A1A1A solid;
  justify-content: center;
  align-items: center;
  gap: 48px;
  box-sizing: border-box;
`;

const Menubutton = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: #1A1A1A;
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 600;
  cursor: pointer;
  position: relative;
`;

const LoginContainer = styled.div`
  display: flex;
  height: 100%;
  width: 204px;
  border-left: 1px #1A1A1A solid;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <HeaderContainer>
      <TitleContainer>
        <HomeIcon src={homeUrl} alt="home" />
        <MainTitle
          onClick={() => handleNavigation("/")}
          $isActive={location.pathname === "/"}
        >
          멋쟁이사자처럼 서경대학교
        </MainTitle>
      </TitleContainer>

      <RightSection>
        <MenuContainer>
          <Menubutton
            onClick={() => handleNavigation("/recruit")}
            $isActive={location.pathname === "/recruit"}
          >
            지원하기
          </Menubutton>
          <Menubutton
            onClick={() => handleNavigation("/project")}
            $isActive={location.pathname === "/project"}
          >
            프로젝트
          </Menubutton>
          <Menubutton
            onClick={() => handleNavigation("/members")}
            $isActive={location.pathname === "/members"}
          >
            구성원
          </Menubutton>
        </MenuContainer>

        <LoginContainer>
          <Menubutton
            onClick={() => handleNavigation("/login")}
            $isActive={location.pathname === "/login"}
          >
            로그인/회원가입
          </Menubutton>
        </LoginContainer>
      </RightSection>
    </HeaderContainer>
  );
}