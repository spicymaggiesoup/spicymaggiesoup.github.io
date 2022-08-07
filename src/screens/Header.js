import React from 'react';
import styled from 'styled-components'
// import Logo from '../../assets/cowkite.ico';

import Navbar from './Navbar'

const HeaderContainer = styled.header`
  background-color:rgba(255,255,255,0.8);
  border-bottom:1px solid #f0f0f0;
  top:0;
  position:sticky;
  z-index:2;
`

const DivContainer = styled.div`
  display:flex;
  padding:1rem 3rem;
`;

const Logo = styled.div`
  display:flex;
  align-items:center;
  width:100%;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <DivContainer>   
          <Logo>
              <>
                  {/* <img src="{Logo}" style="width:4rem;" /> */}
              </>
              <>COWKITE</>
          </Logo>
          <Navbar/>
      </DivContainer>
    </HeaderContainer>
  )
}

export default Header;
