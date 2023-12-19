"use client";

import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import First from "./First";
import MyHome from "./MyHome";
import profile from "/public/image/profile.png";

const MyLayout = () => {
  const [selectedComponent, setSelectedComponent] = useState();
  const [selectedButton, setSelectedButton] = useState();

  const handleButtonClick = (component, button) => {
    setSelectedComponent(component);
    setSelectedButton(button);
  };
  return (
    <>
      <S.Wrapper>
        <S.Profile>
          <Image
            alt="profile"
            priority={true} // true false
            src={profile}
            height={50}
            width={50}
          />
        </S.Profile>
        <S.Container>
          <S.Ul>
            <S.Li
              onClick={() => handleButtonClick(<MyHome />, "HOME")}
              isSelected={selectedButton === "HOME"}
            >
              <S.Button>HOME</S.Button>
            </S.Li>
            <S.Li
              onClick={() => handleButtonClick(<First />, "FIRST")}
              isSelected={selectedButton === "FIRST"}
            >
              <S.Button>FIRST</S.Button>
            </S.Li>
            <S.Li>
              <S.Button>SECOND</S.Button>
            </S.Li>
            <S.Li>
              <S.Button>THIRD</S.Button>
            </S.Li>
          </S.Ul>
        </S.Container>
      </S.Wrapper>
      {selectedComponent}
    </>
  );
};

export default MyLayout;

const S = {};

S.Wrapper = styled.div`
  width: 300px;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid #000;
  margin: 10px;

  border-radius: 16px;
  background-color: #425d5a;
`;

S.Profile = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #3c5754;
  width: 100%;
  /* border-radius: 16px; */
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

S.Ul = styled.ul`
  /* padding: 30px; */
  margin-top: 18px;
  width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

S.Li = styled.li`
  position: relative;
  list-style: none;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  background-color: ${({ isSelected }) => (isSelected ? "#fff" : "#425d5a")};
  color: ${({ isSelected }) => (isSelected ? "#425d5a" : "#fff")};
  cursor: pointer;

  :hover {
    background-color: #fff;
    color: #425d5a;
  }
`;

S.Button = styled.button`
  font-size: 24px;
  color: inherit; /* 상위 요소로부터 상속된 글자 색상 사용 */
  :hover {
    color: #425d5a;
  }
`;
S.Container = styled.div`
  width: 100%;
  padding-left: 10px;
`;
