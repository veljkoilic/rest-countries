import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Country } from "./pages/Country";
import styled from "styled-components";
import { useSelector } from "react-redux/es/exports";

function App() {
  const colorMode = useSelector(state=>state.theme.theme)
  return (
    <div className="App" color-mode={colorMode ? "light" : "dark"}>
      <Container>
        <BrowserRouter basename="/rest-countries-app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:id" element={<Country />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}
const Container = styled.div`
background-color: var(--bg-color);
color: var(--text-color);
min-height: 100vh
`;

export default App;
