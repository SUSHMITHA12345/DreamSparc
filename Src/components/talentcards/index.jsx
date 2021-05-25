import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";


const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 300px;
  min-height: 250px;
  background-color: #fff;
  box-shadow: 0 0 4px rgba( 0, 0, 0, 0.5);
  margin: 0.6em;
  margin-bottom: 1.5em;
`;

const TopContainer = styled.div`
  width: 100%;

`;  

const TalentThumbnail = styled.div`
  width: 100%;
  height: 12em;

  img {
      width: 100%;
      height: 100%;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  padding: 10px 12px;
  
`;

const BottomContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba( 12, 12, 12, 0.17);
  padding: 0 12px;
`;

const Title = styled.h2`
  font-size: 22px;
  margin: 0;
  font-weight: 600;
  color: #000;
  text-align: center;
`;

export function TalentCard(props) {
    const { thumbnailsUrl, title } = props;

  return <CardContainer>
      <TopContainer>
          <TalentThumbnail>
              <img src={thumbnailsUrl} alt={title} />
          </TalentThumbnail>
      </TopContainer>
      <ContentContainer>
          <Title>{title}</Title>
          <Marginer direction="vertical" margin={10} />
      </ContentContainer>
      <BottomContainer>
          
      </BottomContainer>
  </CardContainer>
}
