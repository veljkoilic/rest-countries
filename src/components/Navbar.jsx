import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { switchTheme } from "../redux/themeSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as faMoonFull } from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonEmpty } from "@fortawesome/free-regular-svg-icons";
import { mobile } from "../responsive";

export const Navbar = () => {
  const colorMode = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  return (
    <Container>
      <h1>Where in the world?</h1>
      <button style={{ textTransform: "capitalize" }} onClick={() => dispatch(switchTheme(!colorMode))}>
        <FontAwesomeIcon icon={colorMode ?  faMoonEmpty : faMoonFull} /> Dark Mode
      </button>
    </Container>
  );
};
const Container = styled.div`
  color: var(--text-color);
  background-color: var(--elements-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 5%;
  h1 {
    font-size: 18px;
    ${mobile({
      fontSize: "14px"

    })}
  }
  button {
    text-transform: capitalize;
    color: var(--text-color);
    border: none;
    background-color: transparent;
    font-weight: bolder;
    font-size: 16px;
    margin-top: 0;
    padding: 10px 20px;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      background-color: var(--bg-color);
      border-radius: 50px;
      transition: 0.1s;
    }
    svg {
      margin-right: 4px;
    }
  }
`;
