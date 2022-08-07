import React from 'react';
import styled from 'styled-components'

const FooterContainer = styled.footer`
  background-color:#f0f0f0;
`;

const Footer = () => {
  return (
    <FooterContainer>
        <div><p>© 2022 cowkite®</p></div>
        <div><p>samantha8009@gmail.com</p></div>
        <div>
            <ul>
                <li>Korean</li>
            </ul>
        </div>
    </FooterContainer>
  );
};

export default Footer;
