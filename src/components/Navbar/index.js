import React from "react";
import { Nav, NavbarContainer, Navlogo } from "./NavbarElements";

const Navbar = () => {
  return (
    
    <Nav>
      <NavbarContainer>
        <Navlogo to='/'>icon</Navlogo>
        <h1>Hey</h1>
      </NavbarContainer>
    </Nav>
    
  );
};

export default Navbar;
