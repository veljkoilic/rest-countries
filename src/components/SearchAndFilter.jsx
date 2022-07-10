import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const SearchAndFilter = () => {
  return (
    <Container>
      <InputContainer>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" />
      </InputContainer>
      <SelectContainer>
        <select name="region">
          <option value="">Filter by Region</option>
          <option value="">Africa</option>
          <option value="">America</option>
          <option value="">Asia</option>
          <option value="">Europe</option>
          <option value="">Oceania</option>
        </select>
      </SelectContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

`;

const InputContainer = styled.div`
  background-color: var(--input-bg-color);
  display: flex;
  align-items: center;
  padding: 6px 12px;
  width: 30%;
  border-radius: 3px;
  box-shadow: var(--shadow);
  input {
    border: none;
    background: transparent;
    margin-left: 10px;
    color: var(--text-color);
    width: 100%;
    padding: 6px 12px;
    font-size: 14px;
    &:focus {
      outline: none;
    }
  }
`;
const SelectContainer = styled.div`
display: flex;
align-items: center;
padding: 10px 20px;
background-color: var(--elements-color);
border-radius: 5px;

  select {
    border: none;
    background-color: transparent;
    option{
        width: 100%;
        padding: 10px 20px;
    }
  }
`;