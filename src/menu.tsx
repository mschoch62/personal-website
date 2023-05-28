import styled from "styled-components";
import logo from "./img/logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import { About } from "./about";
import { Resume } from "./resume";
import { BackgroundSlider } from "./background-slider";
import { Contact } from "./contact";
import { Portfolio } from "./portfolio";

export const Menu = () => {
  return (
    <>
      <Header>
        <StyledLink to="about">About Mike</StyledLink>
        <StyledLink to="resume">Resume</StyledLink>
        <Title>Michael Schoch</Title>
        <LogoContainer>
          <Link to="/">
            <Logo src={logo} />
          </Link>
        </LogoContainer>
        <StyledLink to="/portfolio">Portfolio</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </Header>
      <Routes>
        <Route path="/" element={<BackgroundSlider />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: #12274a;
  width: 100%;
  padding: 0 32px;
  box-sizing: border-box;
`;

const Logo = styled.img`
  width: 100px;
  display: flex;
  margin-top: 25px;
`;

const LogoContainer = styled.div`
  width: 120px;
  height: 120px;
  background: #cf1e51;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 10px 10px;
`;

const Title = styled.h1`
  display: none;
  color: white;
  margin: 0 16px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  text-align: center;
  margin: 0 16px;
`;