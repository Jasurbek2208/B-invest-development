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
import { useState } from "react";

export default function Home() {
  const [isWrap, setIsWrap] = useState(false);

  return (
    <StyledHomePage>
      <div className={(isWrap ? "wrap " : "") + "content-wrap__wrapper"}></div>
      <div className="container mediaContainer">
        <Navbar setIsWrap={setIsWrap} />
        <Header />
      </div>
      <div className="container">
        <HomeSelect setIsWrap={setIsWrap} />
        <ProjectsPage />
        <AboutPage />
        <NewsPage />
        <main className="map_section">
          <MapLocation />
        </main>
        <FAQ />
        <Footer />
      </div>
    </StyledHomePage>
  );
}

const StyledHomePage = styled.div`
  position: relative;
  padding: 30px 0px;

  .content-wrap__wrapper {
    display: none;

    &.wrap {
      display: flex;
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: none;
      z-index: 10;
      overflow-x: auto;
      overflow-y: hidden;
    }
  }

  @media (max-width: 800px) {
    margin: 0px;
    padding: 0px;
    padding-bottom: 30px;

    .mediaContainer {
      padding: 0px;
      padding-bottom: 30px;
    }
  }

  @media (max-width: 580px) {
    .map_section {
      display: none;
    }
  }
`;
