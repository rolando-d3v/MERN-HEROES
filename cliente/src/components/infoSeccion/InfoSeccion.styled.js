import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
// import { Link } from "react-router-dom";

export const InfoSec = styled.div`
  /* background-color: ${(props) => props.theme.bgColor} ; */
  padding: 160px 0;
  color: #fff;
  background-color: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
  transition: all 0.5s ease;
  
  /* @media screen and (min-width : 1024px) {
    height: calc(100vh - 64px);
  } */
  `;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 -15px -15px -15px;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;


//primer seccion
export const TextWrapper = styled.h4`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#4B59F7")};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? "#F7F8FA" : "#1C2237")};
`;
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#A9B3C1" : "#1C2237")};
`;

export const Button = styled.button`
  background-color: #4b59f7;
  border-radius: 8px;
  color: #fff;
  font-weight: 600;
  padding: 0.4rem 1rem;
  font-size: 18px;
  line-height: 24px;
  outline: none;

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;


export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({start}) => start ? 'flex-start' :  'flex-end'};
`
export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`
