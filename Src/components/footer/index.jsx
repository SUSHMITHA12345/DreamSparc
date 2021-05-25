import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../BrandLogo";
import { FaFacebook, FaTwitter, FaInstagram  } from  "react-icons/fa";

const FooterContainer = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em 3em;
  padding-bottom: 0;
  border-top: 0.6px solid rgb( 0, 0, 0, 0.5 );
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 12px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-of-type) {
      margin-right: 5%;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 80px;
  border-top: 0.7px solid rgb( 0, 0, 0, 0.4 );
  padding: 0 20px;
`;

const RightBottomContainer = styled.div`
  display: flex;
 `;
 
 const LeftBottomContainer = styled.div`
   display: flex;
 `;  

 const Title = styled.h3`
   margin: 0;
   margin-bottom: 10px;
   color: #000;
   font-weight: 600;
   font-size: 20px;
`;

const FLink = styled.a`
  text-decoration: none;
  color: #6F6F6F;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  
  &:not(:last-of-type) {
      margin-bottom: 6px;
  }
`;

const PrivacyText = styled.h5`
  color: #8a8a8a;
  font-size: 12px;
  margin: auto;
  margin-left: 10px;
  display: flex;
  margin-top: 6px;
  align-items: center;
`;

const SocialIcon = styled.div`
  color: #8a8a8a;
  font-size: 25px;
  cursor: pointer;
  transition: background-color, 200ms ease-in-out;

  &::not(:last-of-type) {
    margin-right: 6px;
  }

  &:hover {
    color: #777777;
  }
`;

export function Footer(props) {
    return <FooterContainer>
        <TopContainer>
            <ContentContainer>
                <Title>About Us</Title>
                <FLink>Why DreamSparc</FLink>
                <FLink>Team</FLink>
                <FLink>Others</FLink>
                

            </ContentContainer>
            <ContentContainer>
                <Title>Contact Us</Title>
                <FLink>+91 9999999999</FLink>
                <FLink>abc@gmail.com</FLink>
            </ContentContainer>
        </TopContainer>
        <BottomContainer>
            <LeftBottomContainer>
              <BrandLogo color="#8a8a8a" textSize={25} />
              <PrivacyText> &#169: All Rights Reserved. 2021</PrivacyText>


            </LeftBottomContainer>
            <RightBottomContainer>
              <SocialIcon><FaFacebook /></SocialIcon>
              <SocialIcon><FaTwitter /></SocialIcon>
              <SocialIcon><FaInstagram /></SocialIcon>
              
            
            </RightBottomContainer>

        </BottomContainer>
    </FooterContainer>

}
