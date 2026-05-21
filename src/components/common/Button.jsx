import React from "react";
import styled from "styled-components";

const GenButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #1A1A1A;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 500;
  height: 44px;
  min-width: 92px;
  padding: 8px 23px;
  border: 1px solid #1A1A1A;
  background-color: #FFFFFF;
  cursor: pointer;
  box-sizing: border-box;

  ${props => props.$active && `
    border: 2px solid #1A1A1A;
    background-color: #C6E400;
  `}
`;

export default function Button({ children, $active, onClick }) {
  return (
    <GenButton $active={$active} onClick={onClick}>
      {children}
    </GenButton>
  );
}