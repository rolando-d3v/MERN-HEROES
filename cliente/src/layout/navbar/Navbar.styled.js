import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container } from "../../style/globalStyled";

const mobileWidth = 640;
const mobile = `@media (max-width: ${mobileWidth}px)`;

export const Nav = styled.nav`
  background-color: ${(props) => props.theme.bgColor};
  /* background-color: #10131a; */
  position: sticky;
  justify-content: center;
  top: 0;
  z-index: 999;
  font-size: 1.2rem;
  padding: 0 0.5rem;
  height: 64px;
  display: flex;
  align-items: center;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FaIcons.FaMagento)`
  margin-right: 0.5rem;
`;

//icono para cerrar el sidebar mobile
export const MobileIcon = styled(Link)`
  display: none;

  @media screen and (max-width: 640px) {
    display: flex;
    color: #fff;
    font-size: 1.8rem;
    cursor: pointer;
    :hover {
      color: #4b59f7;
    }
  }
`;

// MENU
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  /* movil */
  ${mobile} {
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 64px);
    background-color: #101522;
    position: absolute;
    top: 64px;
    opacity: ${({ click }) => (click ? "100%" : "5%")};
    left: ${({ click }) => (click ? 0 : "-100%")};
    transition: all 0.5s ease;
  }
`;

export const NavItem = styled(Link)`
  display: flex;
  font-weight: 500;
  font-size: 1rem;
  align-items: center;
  text-decoration: none;
  color: #fff;
  margin: 0 0.3rem;

  & svg {
    margin-left: 0.2rem;
  }
  :hover {
    color: #4b59f7;
  }

  /* movil */
  @media screen and (max-width: 640px) {
    display: flex;
    justify-content: center;
    width: 95%;
    padding: 0.5rem 1rem;
    border-radius: 15px;
    &:hover {
      transition: all 0.3s ease;
      background-color: #4b59f7;
      color: #000;
    }
  }
`;

export const Button = styled.button`
  background: transparent;
  border-radius: 5px;
  border: 2px solid #4374dd;
  color: palevioletred;
  margin: 1em 1em;
  outline: none;
  padding: 0.25em 1em;
  font-weight: 500;
  :hover {
    background-color: #4374dd;
    color: #000;
  }

  @media screen and (max-width: 640px) {
    color: #fff;
    padding: 0.5em 1em;
    font-weight: 600;
    font-size: 1rem;
    background-color: #4b59f7;
    width: 95%;
  }
`;

export const Toggle = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 15px;
  width: 40px;
  height: 22px;
  display: flex;
  align-items: center;
  & span {
    transition: all 0.3s ease;
    position: absolute;
    right: ${({ the }) => (the ? "0.9px" : "19px")};
    display: block;
    background-color: red;
    border-radius: 50%;
    height: 20px;
    width: 20px;
  }
`;
