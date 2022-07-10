import React from "react";
import styled from "styled-components";
import { CountryCard } from "../components/CountryCard";
import { SearchAndFilter } from "../components/SearchAndFilter";
import {laptop ,mobile, tablet} from '../responsive'

export const Home = () => {
  return (
    <Container>
      <SearchAndFilter />
      <CountryCardWrapper>
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
      </CountryCardWrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 5px 5%;
`;

const CountryCardWrapper = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
${laptop({
  gridTemplateColumns: "repeat(3, 1fr);"
})}
${tablet({
  gridTemplateColumns: "repeat(2, 1fr);"
})}
${mobile({
  gridTemplateColumns: "1fr"
})}
gap: 30px;
margin: 100px auto 0 auto;


`;