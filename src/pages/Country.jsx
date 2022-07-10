import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const Country = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Back
        onClick={() => {
          navigate(-1);
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        Back
      </Back>
      <CountryWrap>
        <Image src="https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg" />
        <CountryInfo>
          <Title>Germany</Title>
          <Top>
            <Left>
              <span><span className="bold">Native Name:</span> Germy</span>
              <span><span className="bold">Population:</span> 1.0000.000 </span>
              <span><span className="bold">Region:</span> Europe</span>
              <span><span className="bold">Sub Regioon:</span> Western Europe</span>
              <span><span className="bold">Capital:</span> Berlin</span>
            </Left>
            <Right>
              <span><span className="bold">Top Level Domain:</span> .de</span>
              <span><span className="bold">Currencies:</span> Euro </span>
              <span><span className="bold">Languages:</span> Dutch, French, German</span>
            </Right>
          </Top>
          <Bottom>
            <span><span className="bold">Border Countries:</span></span>
            <BorderCountry>France</BorderCountry>
            <BorderCountry>Austria</BorderCountry>
            <BorderCountry>Poland</BorderCountry>
          </Bottom>
        </CountryInfo>
      </CountryWrap>
    </Container>
  );
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
display:flex;
justify-content: space-between;
`;
const Image = styled.img`
  width: 40%;
  padding: 50px 100px 0 0;
  flex: 1;
`;
const CountryInfo = styled.div`
display: flex;
flex-direction: column;
flex: 1;
.bold{
  font-weight: bold;

}
`;
const Title = styled.h1`
margin-top: 50px;
`;
const Top = styled.div`
display: flex;
gap: 40px;
span{
  padding: 5px 0 ;
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
gap: 20px;
`;
const BorderCountry = styled.div`
background-color: var(--elements-color);
box-shadow: var(--shadow);
padding: 5px 25px;
border-radius: 5px;
cursor: pointer;
transition: 0.15s;
&:hover{
  transition: 0.15s;
  transform: scale(1.08);
}
`;