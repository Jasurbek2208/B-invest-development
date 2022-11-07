import React from "react";
import styled from "styled-components";

// Components
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import HomeSelect from "../components/choiseKvartira/HomeSelect";
import ProjectsPage from "../components/projectsPage/ProjectsPage";
import AboutPage from "../components/about/AboutPage";

export default function Home() {
  return (
    <StyledHomePage>
      <div className="container mediaContainer">
        <Navbar />
        <Header />
      </div>
      <div className="container">
        <HomeSelect />
        <ProjectsPage />
        <AboutPage />
      </div>
    </StyledHomePage>
  );
}

const StyledHomePage = styled.div`
  padding-top: 30px;

  @media (max-width: 800px) {
    margin: 0px;
    padding: 0px;

    .mediaContainer {
      padding: 0px;
    }
  }
`;
