import React, { useEffect } from "react";
import styled from "styled-components";
import { CountryCard } from "../components/CountryCard";
import { SearchAndFilter } from "../components/SearchAndFilter";
import { laptop, mobile, tablet } from "../responsive";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { addCountries } from "../redux/countrySlice";

export const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector(state=>state.countries.countries)
  const filteredCountries = useSelector(state=>state.countries.filteredCountries)
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then(function (response) {
      dispatch(addCountries(response.data))
    });
  }, []);
  return (
    <Container>
      <SearchAndFilter />
      <CountryCardWrapper>
        {filteredCountries.length > 0 && filteredCountries.map((c, index) => <CountryCard country={c} key={index}/>)}
        {filteredCountries.length === 0 && countries.map((c, index) => <CountryCard country={c} key={index}/>)}
      </CountryCardWrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 5px 5%;
  padding-bottom: 100px;
`;

const CountryCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  ${laptop({
    gridTemplateColumns: "repeat(3, 1fr);",
  })}
  ${tablet({
    gridTemplateColumns: "repeat(2, 1fr);",
  })}
${mobile({
    gridTemplateColumns: "1fr",
  })}
gap: 30px;
  margin: 100px auto 0 auto;
`;
