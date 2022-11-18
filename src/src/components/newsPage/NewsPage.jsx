import React from "react";
import styled from "styled-components";

// Images
import news1 from "../../assets/img/news1.png";
import news2 from "../../assets/img/news2.png";
import news3 from "../../assets/img/news3.png";
import NewsCard from "./NewsCard";

export default function NewsPage() {
  return (
    <StyledNewsPage>
      <h1 className="head-title">Новости</h1>
      <div className="news__wrapper">
        <NewsCard
          descript="В частности, уклада предопределяет высокую востребованность"
          year="22.10.2022"
          img={news1}
        />
        <NewsCard
          descript="В частности, уклада предопределяет высокую востребованность"
          year="22.10.2022"
          img={news2}
        />
        <NewsCard
          descript="В частности, уклада предопределяет высокую востребованность"
          year="22.10.2022"
          img={news3}
        />
      </div>
    </StyledNewsPage>
  );
}

const StyledNewsPage = styled.div`
  h1 {
    margin: 120px 0px 30px;
  }

  .news__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 30px;
  }
`;
