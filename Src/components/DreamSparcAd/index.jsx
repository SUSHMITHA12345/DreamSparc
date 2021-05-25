import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../BrandLogo";
import { Marginer } from "../marginer";
import ColorImg from "../../images/color.png";
import { Button } from "../button";

const DreamSparcAdContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  background-color: #264653;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  }
`;

const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 6em;

  }
`;

const Slogan = styled.h2`
  margin: 0;
  font-size: 26px;
  color: #fff;
  font-weight: 700;
  line-height: 1.5;
  text-align: start;
  
  }
`;

const StandoutImage = styled.div`
  width: 36em;
  height: 30em;
  img {
    width: 100%;
    height: 100%;
  
  }
`;

export function DreamSparcAd(props) {

  return (
    <DreamSparcAdContainer>
      <ContentContainer>
        <SloganContainer>
          <BrandLogo logoSize={42} textSize={37} />
          <Marginer direction="vertical" margin="2em" />
          <SloganContainer>
            <Slogan>You’re have a unique talent</Slogan>
            <Slogan>and want to be a</Slogan>
            <Slogan>part of DreamSparc?</Slogan>
          </SloganContainer>
          <Marginer direction="vertical" margin="0.9em" />
          <Button size={16}>Join Us</Button>
        </SloganContainer>
        <StandoutImage>
          <img src={ColorImg} alt="Join Us" />
        </StandoutImage>
      </ContentContainer>
    </DreamSparcAdContainer>
  );
}
