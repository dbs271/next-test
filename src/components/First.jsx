"use client";

import React from "react";
import styled from "styled-components";

const First = () => {
  return <S.First>First</S.First>;
};

export default First;

const S = {};

S.First = styled.div`
  width: 100%;
  height: 100vh;
  background-color: green;
`;
