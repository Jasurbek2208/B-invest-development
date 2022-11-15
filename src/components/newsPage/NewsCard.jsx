import React from "react";
import styled from "styled-components";

export default function NewsCard({ descript, year, img }) {
  return (
    <StyledNewsCard
      style={{
        background: `linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.54) 6.51%,
        rgba(0, 0, 0, 0) 72.85%
      ), url(${img})`,
      }}
    >
      <h4>{descript}</h4>
      <p>{year}</p>
    </StyledNewsCard>
  );
}

const StyledNewsCard = styled.div`
  padding: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  width: 390px;
  height: 358px;
  border-radius: 40px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  h4 {
    max-width: 345px;
    font-size: 24px;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: -0.04em;
    color: #fff;
  }

  p {
    margin-top: 30px;
    font-size: 18px;
    line-height: 25px;
    color: #fff;
  }

  @media (max-width: 500px) {
    h4 {
      font-size: 22px;
    }
  }

  @media (max-width: 360px) {
    h4 {
      font-size: 20px;
    }
  }
`;
