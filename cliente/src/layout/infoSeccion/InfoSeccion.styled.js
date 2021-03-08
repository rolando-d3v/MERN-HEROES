import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
// import { Container } from "../../style/globalStyled";

export const InfoSec = styled.div`
  padding: 160px 0rem;
  color: #fff;
  background-color: ${({lightBg}) => (lightBg ? "#fff" : "#101522")};
`;
