import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { tablet } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setCountry } from "../redux/countrySlice";
import { useEffect, useState } from "react";

export const Country = () => {
  const navigate = useNavigate();
  const url = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.countries.currentCountry)[0];
  const query = useParams().id;

  const [borderCountries, setborderCountries] = useState([]);
  useEffect(() => {
    if (country && country.borders) {
      axios.get(`https://restcountries.com/v3.1/alpha?codes=${country.borders.join(",")}`).then(function (response) {
        setborderCountries(response.data);
      });
    }
  }, [country]);
  useEffect(() => {
    try {
      axios.get(`https://restcountries.com/v3.1/name/${query}?fullText=true`).then(function (response) {
        dispatch(setCountry(response.data));
      });
    } catch (err) {
      console.log(err);
    }
  }, [url]);
  let currencies = [];
  let languages = [];
  let nativeNames = [];
  if (country) {
    for (const key in country.currencies) {
      currencies.push(`${country.currencies[key].name}`);
    }
    for (const key in country.languages) {
      languages.push(`${country.languages[key]}`);
    }
    for (const key in country.name.nativeName) {
      nativeNames.push(`${country.name.nativeName[key].official}`);
    }
  }
  if (country) {
    return (
      <Container>
        <Back onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </Back>
        <CountryWrap>
          <Image src={country.flags.png} />
          <CountryInfo>
            <Title>{country.name.official}</Title>
            <Top>
              <Left>
                <span>
                  <span className="bold">Native Names:</span> {nativeNames.join(", ")}
                </span>
                <span>
                  <span className="bold">Population:</span>{" "}
                  {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
                <span>
                  <span className="bold">Region:</span> {country.region}
                </span>
                <span>
                  <span className="bold">Sub Region:</span> {country.subregion}
                </span>
                <span>
                  <span className="bold">Capital:</span> {country.capital[0]}
                </span>
              </Left>
              <Right>
                <span>
                  <span className="bold">Top Level Domain:</span> {country.tld}
                </span>
                <span>
                  <span className="bold">Currencies:</span> {currencies.join(", ")}
                </span>
                <span>
                  <span className="bold">Languages:</span> {languages.join(", ")}
                </span>
              </Right>
            </Top>
            <Bottom>
              <span>
                <span className="bold">Border Countries: {!country.borders && "None"}</span>
              </span>
              {borderCountries &&
                borderCountries.map((c) => {
                  return (
                    <Link className="link" key={c.name.official} to={`/country/${c.name.official}`}>
                      <BorderCountry>{c.name.official}</BorderCountry>
                    </Link>
                  );
                })}
            </Bottom>
          </CountryInfo>
        </CountryWrap>
      </Container>
    );
  } else {
    return <h1 style={{ marginTop: "20px", textAlign: "center" }}>Getting data...</h1>;
  }
};

const Container = styled.div`
  padding: 100px 5%;
`;
const Back = styled.button`
  background-color: var(--elements-color);
  border: none;
  padding: 10px 25px;
  box-shadow: var(--shadow);
  border-radius: 3px;
  transition: 0.3s;
  color: var(--text-color);
  cursor: pointer;
  &:hover {
    transition: 0.3s;
    transform: scale(1.08);
  }
  svg {
    padding-right: 15px;
  }
`;

const CountryWrap = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  ${tablet({
    flexDirection: "column",
    alignItems: "center",
  })}
`;
const Image = styled.img`
  height: 100%;
  flex: 1;
  padding: 50px 100px 0 0;
  /* flex: 1; */
  ${tablet({
    paddingRight: 0,
    width: "80%",
  })}
`;
const CountryInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  object-fit: contain;
  ${tablet({
    width: "80%",
  })}
  .bold {
    font-weight: bold;
  }
`;
const Title = styled.h1`
  margin-top: 50px;
`;
const Top = styled.div`
  display: flex;
  gap: 50px;
  ${tablet({
    flexDirection: "column",
    width: "80%",
  })}
  span {
    padding: 5px 0;
    font-size: 16px;
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Bottom = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  ${tablet({
    flexDirection: "column",
    alignItems: "flex-start",
  })}
`;
const BorderCountry = styled.div`
  background-color: var(--elements-color);
  box-shadow: var(--shadow);
  padding: 5px 25px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.15s;
  &:hover {
    transition: 0.15s;
    transform: scale(1.08);
  }
`;
