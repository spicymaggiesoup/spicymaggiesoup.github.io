import React from 'react';
import styled from "styled-components";

const Navigation = styled.nav`
  display:flex;
  align-items:center;
`;

const Navbar = () => {
  return (
    <Navigation>
      <ul>Profile</ul>
      <ul>Blog</ul>
      <ul>Resouces</ul>
    </Navigation>
  );
};

export default Navbar;
