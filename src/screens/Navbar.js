import React from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Introduce from './Introduce/Index';
import Home from './Home';

const Navigation = styled.nav`
  display:flex;
  align-items:center;
`;

const Navbar = () => {

  const movePath = () => {
    console.log('콘솔 clicked... Introduce');
  };

  return (
    <Navigation>
      <Router>
        <ul
          style={{cursor:"pointer"}}>
          <Link to={"/Introduce"} className="nav-link">
            Introduce
          </Link>
        </ul>
        <ul>Blog</ul>
        <ul>Resouces</ul>

        <Routes>
          <Route exact path="/" element={Home}></Route>
          <Route path="/Introduce" element={Introduce}></Route>
        </Routes>
      </Router>
      <ul>Profile</ul>
      <ul>Blog</ul>
      <ul>Resouces</ul>
    </Navigation>
  );
};

export default Navbar;
