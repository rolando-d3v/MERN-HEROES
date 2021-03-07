import React from "react";
import styled from "styled-components";

export default function Navbar() {
  return (
    <Nav>
      <div>
        <Li>home</Li>
        <Li>app</Li>
        <Li>profile</Li>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  background-color: #0f0f42;
  position: sticky;
  justify-content: center;
  top: 0;
  z-index: 999;
  font-size: 1.2rem;
  div {
    padding: 0 1rem;
    height: 64px;
    display: flex;
    align-items: center;
  }
`;

const Li = styled.li`
  color: #f0f0f8;
  font-weight: 700;
  display: flex;
  margin: 0rem 0.5rem;
  :hover {
    color: #5db7db;
  }
`;
