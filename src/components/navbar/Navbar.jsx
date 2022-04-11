import React, { useState } from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo to="/home" >
        <i>{"<Omer>"}</i>
        <span> Recipe</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu open={isOpen}>
        <MenuLink to="/about" onClick={() => setIsOpen(!isOpen)}>
          About
        </MenuLink>
        <MenuLink to="/github" onClick={() => setIsOpen(!isOpen)}>
          Github
        </MenuLink>
        <MenuLink to="/" onClick={() => setIsOpen(!isOpen)}>
          Logout
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
