import styled from '@emotion/styled'
import React from "react";



const FooterContainer = styled.footer`
    display: flex;
    width: 100%;
    height: 400px;
    background-color: #0059BC;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <h1>Footer</h1>
    </FooterContainer>
  );
};

export default Footer;