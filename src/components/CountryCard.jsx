import React from "react";
import styled from "styled-components";

export const CountryCard = () => {
  return (
    <Container>
      <Image src="https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg" />
      <Info>
        <Name>Germany</Name>
        <Population>Population: 81.770.900</Population>
        <Region>Region: Europe</Region>
        <Capital>Population: 81.770.900</Capital>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--elements-color);
  border-radius: 5px;
  box-shadow: var(--shadow);
  width: 80%;
  margin: 0 auto;
`;
const Image = styled.img`
width: 100%;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
`;
const Info = styled.div`
  padding: 20px;
    display: flex;
    flex-direction: column;
`;
const Name = styled.h6`
margin-top: 0;
font-size: 18px;
margin-bottom: 10px;
`;
const Population = styled.span`
`;
const Region = styled.span`
`;
const Capital = styled.span`
`;
