import React from "react";
import styled from "styled-components";
import LogoImg from "../../images/logos/logo.png";

const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.div`
width: ${({ size }) => (size ? + "px" : "1cm")};
height: ${({ size }) => (size ? + "px" : "1cm")}

img {
    width: 100%;
    height: 100%; 
}
`; 

const LogoTitle = styled.h2`
  margin: 0;
  font-size: ${({ size }) => (size ? size + "px" : "15px")};
  color: ${({ color }) => ( color ? color: "#fff" ) };
  font-weight: 300;
 `; 
  

 export function BrandLogo(props) {
    const { logoSize, textSize, color, hideLogo } = props;
  
    return (
      <BrandLogoContainer>
        
            {hideLogo && <LogoImage size ={ logoSize }>
              <img src={LogoImg} alt="DreamSparc logo" />
            </LogoImage>}
          
          <LogoTitle size ={ textSize } color={color}>DreamSparc</LogoTitle>
            
      </BrandLogoContainer>
    );
  }
  
