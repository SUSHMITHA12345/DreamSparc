import Axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/button";
import { TalentCard } from "../../components/talentcards";


const TalentsContainer =styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h1`
font-weight: 800;
color: #000;
`;

const TalentsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BottomContainer= styled.div`
width: 100%;
display: flex;
justify-content: center;
`;

const WarningText = styled.h3`
  color: rgba(110, 110, 110);
  font-weight: 600;

`;

const ViewMoreButton = styled(Button)`
  background-color: #F2F2F2;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  color: #959595;

  &:hover {
      background-color: #f2f2f2;
      filter: contrast(0.7);
  }
`;


const wait = (num) => new Promise((rs) => setTimeout(rs,num));

export function Talents(props) {

    const [offeredTalents, setTalents] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const isTalentsEmpty =
    !offeredTalents || (offeredTalents && offeredTalents.length === 0);



    const fetchTalents = async () => {
      setLoading(true);
      const response = await Axios.get("http://localhost:9000/talents").catch((err) => {
          console.log("Error: ",err);
      });

      await wait(3000);

      if(response) {
        setTalents(response.data);
      }
      setLoading(false);
    };

    useEffect(() => {
      fetchTalents();
    }, [] );

  return (
  <TalentsContainer>
      <Title>Talents we show</Title>
      <TalentsWrapper>
          {isTalentsEmpty && !isLoading &&  ( <WarningText>No Talents are published yet!</WarningText> )}
          {isLoading &&   <WarningText>Loading...</WarningText> }
          {!isTalentsEmpty && !isLoading && offeredTalents.map((talent, idx) => (
              <TalentCard key={idx} {...talent} /> 

          ))}


       </TalentsWrapper>
       <BottomContainer>
         {!isTalentsEmpty && !isLoading && ( <ViewMoreButton>View More</ViewMoreButton> 
         )}
       </BottomContainer>
   </TalentsContainer>
  );

}
