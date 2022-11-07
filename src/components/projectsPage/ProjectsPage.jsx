import React from "react";
import styled from "styled-components";

// Components
import ProjectCard from "./ProjectCard";

// Images
import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";

export default function ProjectsPage() {
  return (
    <StyledProjectsPage>
      <h1 className="head-title">Наши проекты</h1>
      <div className="content__wrapper">
        <ProjectCard
          img1={img2}
          content={{
            h3: "Chashma Residence",
            p: "Юнусабад, Окилота 11",
            m: "Шахристан",
            sum: "От 3 000 000 сум/м2",
          }}
        />
        <ProjectCard
          img1={img1}
          content={{
            h3: "Elesium",
            p: "Мирабад, Мунис 2",
            m: "М. Куйлюк",
            sum: "От 4 250 000 сум/м2",
          }}
        />
      </div>
    </StyledProjectsPage>
  );
}

const StyledProjectsPage = styled.div`
  padding-top: 120px;

  h1 {
    margin-bottom: 30px;
    font-size: 40px;
    line-height: 120%;
    letter-spacing: -0.04em;
    color: #402e32;
  }

  .content__wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 1000px) {
    .content__wrapper {
      justify-content: center;
    }
  }
`;
