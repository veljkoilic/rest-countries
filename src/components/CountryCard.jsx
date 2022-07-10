import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const CountryCard = ({country}) => {
  return (
    <Container>
      <Link className="link" to={`/country/${country.name.official}`}>
        <Image src={country.flags.png} />
        <Info>
          <Name>{country.name.common}</Name>
          <Population>Population: {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Population>
          <Region>Region: {country.region}</Region>
          <Capital>Capital: {country.subregion}</Capital>
        </Info>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--elements-color);
  border-radius: 5px;
  box-shadow: var(--shadow);
  width: 80%;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    transform: scale(1.08);
  }
`;
const Image = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
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
const Population = styled.span``;
const Region = styled.span``;
const Capital = styled.span``;
