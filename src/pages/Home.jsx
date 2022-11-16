import React from "react";
import styled from "styled-components";

// Components
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import HomeSelect from "../components/choiseKvartira/HomeSelect";
import ProjectsPage from "../components/projectsPage/ProjectsPage";
import AboutPage from "../components/about/AboutPage";
import NewsPage from "../components/newsPage/NewsPage";
import MapLocation from "../components/mapLocation/MapLocation";
import FAQ from "../components/faq/FAQ";
import Footer from "../components/footer/Footer";

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
        <NewsPage />
        <MapLocation />
        <FAQ />
        <Footer />
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
