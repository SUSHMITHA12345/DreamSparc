import React from "react";
import styled from "styled-components";
import { DreamSparcAd } from "../../components/DreamSparcAd";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/NavBar";
import { InnerPageContainer  , PageContainer } from "../../components/PageContainer";
import { Talents } from "./talents";
import { TopSection } from "./topSection";
import { Marginer } from "../../components/marginer";

const ContentContainer =styled.div`
  width: 100%;
  max-width: 1336px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
`;


export function HomePage(props){
    return (
        <PageContainer>
            <TopSection>
                <Navbar />
            </TopSection>
            <InnerPageContainer>
            <Marginer direction="vertical" margin="2em" />
                <ContentContainer>
                <Talents />
                
                </ContentContainer>
                <Marginer direction="vertical" margin="5em" />
                <DreamSparcAd />
                <Marginer direction="vertical" margin="5em" />
            </InnerPageContainer>
            <Footer />
            </PageContainer>
    );
}
