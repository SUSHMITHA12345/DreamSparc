import React from "react";
import styled from "styled-components";
import { BrandLogo }  from "../../components/BrandLogo";
import  { Marginer }
 from "../../components/marginer";
import  { Button }  from "../../components/button";

import TopSectionBackgroundImg from  "../../images/landing-page.jpg";
import CategoriesImg from "../../images/profile.png"; 

const TopSectionContainer = styled.div`
  width: 120%;
  height: 500px;
  background: url(${TopSectionBackgroundImg});
  background-position: 0px -100px;
  background-size: cover;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(131, 195, 140, 0.5);
  display: flex;
  flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%; 
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StandoutImg = styled.div`
  width: 10cm;
  height: 9cm;
  
  img {
    width: 100%;
    height: 100%; 
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
 `; 

 const SloganText = styled.h2`
   margin: 0;
   line-height: 1.5;
   color: #000000;
   font-weight: 700;
   font-size: 35px;
 `;

export function TopSection(props) {
  const { children } = props;

  return (
    <TopSectionContainer>
      <BackgroundFilter>
        { children }
          <TopSectionInnerContainer>
              <LogoContainer>
                  <BrandLogo>
                  <Marginer direction="vertical" margin={8} />
                  </BrandLogo>
                  <SloganText>Unveils the real talent in u!</SloganText>
                  <Marginer direction="vertical" margin={16} /> 
                  <Button>Search</Button>
                  </LogoContainer>
                  
          <StandoutImg>
               <img src={CategoriesImg} alt="categories" /> 
              </StandoutImg>
              </TopSectionInnerContainer>
              </BackgroundFilter>
    </TopSectionContainer>
  );
}
