import React from 'react';
import styled from "styled-components";

const NavDiv = styled.div`
  
`;

const Navbar = () => {
  return (
    <nav>
      <NavDiv>
        <ul>
          <li>메뉴1</li>
          <li>메뉴2</li>
          <li>메뉴3</li>
        </ul>
      </NavDiv>
    </nav>
  );
};

export default Navbar;
