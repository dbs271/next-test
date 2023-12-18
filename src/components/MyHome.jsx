"use client";
import React from "react";
import styled from "styled-components";

const MyHome = () => {
  return <S.Home>MyHome</S.Home>;
};

export default MyHome;

const S = {};
S.Home = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;
`;
