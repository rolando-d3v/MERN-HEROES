import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
// import { Link } from "react-router-dom";

export const InfoSec = styled.div`
  /* background-color: ${(props) => props.theme.bgColor} ; */
  padding: 160px 0;
  color: #fff;
  background-color: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
  transition: all 0.5s ease;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 -15px -15px -15px;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
   
`;



export const TextWrapper = styled.h4``;
