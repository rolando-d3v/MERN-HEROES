import React, { useState } from "react";
import * as s from "./Navbar.styled";
import * as FaIcons from "react-icons/fa";

export default function Navbar({ toggle, toggleBoolean }) {
  const [click, setClick] = useState(false);


  const onclickIcon = () => {
    if (click) {
      //funcion para remover el scroll del body
      document.querySelector("body").classList.remove("removeScrollBody");
      setClick(false);
    } else {
      document.querySelector("body").classList.add("removeScrollBody");
      setClick(true);
    }
  };


  //captura el ancho de la ventana
  window.addEventListener("resize", function () {
    let ancho = window.innerWidth;
    // console.log(ancho);
    if (ancho > 640) {
      setClick(false);
    }
  });


  //funcion para cerrar el sidebar movil al hacer click
  const clickLink = () => {
    setClick(false);
    document.querySelector("body").classList.remove("removeScrollBody");
  };

  const navList = [
    { icon: <FaIcons.FaPenSquare />, href: "/", name: "Home" },
    { icon: <FaIcons.FaSearch />, href: "/price", name: "price" },
    { icon: <FaIcons.FaTable />, href: "/carousel", name: "Tabla" },
  ];

  return (
    <s.Nav>
      <s.NavbarContainer>
        <s.NavLogo to="/">
          <s.NavIcon />
          Ultra
        </s.NavLogo>
        <s.MobileIcon onClick={onclickIcon}>
          {click ? <FaIcons.FaTimes /> : <FaIcons.FaBars />}
        </s.MobileIcon>

        <s.NavMenu click={click}>
          {navList.map((item, index) => (
            <s.NavItem key={index} to={item.href} onClick={() => clickLink()}>
              {item.name}
              {item.icon}
            </s.NavItem>
          ))}
          <s.Button>SIGN UP</s.Button>
          <s.ContentToggle>
            <FaIcons.FaSun
              style={{ color: !toggleBoolean ? "yellow" : "gray" }}
            />
            <s.Toggle onClick={() => toggle()} toggleBoolean={toggleBoolean}>
              <span />
            </s.Toggle>
            <FaIcons.FaMoon
              style={{ color: toggleBoolean ? "blue" : "gray" }}
            />
          </s.ContentToggle>
        </s.NavMenu>
      </s.NavbarContainer>
    </s.Nav>
  );
}
