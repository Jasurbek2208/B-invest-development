import React from "react";
import styled from "styled-components";

export default function CompanyStaticsCard({ h1, p }) {
  return (
    <StyledCompanyStaticsCard>
      <h1>{h1}</h1>
      <p>{p}</p>
    </StyledCompanyStaticsCard>
  );
}

const StyledCompanyStaticsCard = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  width: calc(290px - 1rem);
  gap: 10px;
  border-radius: 30px;
  background-color: #fff;

  h1 {
    font-weight: 600;
    font-size: 56px;
    line-height: 120%;
    letter-spacing: -0.04em;
    color: #d7b56d;
  }

  p {
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: -0.04em;
    color: #402e32;
  }

  @media (max-width: 500px) {
    padding: 20px;
    justify-content: center;
    width: 162px;
    gap: 6px;
    border-radius: 16px;
    background-color: #fff;
    h1 {
      font-size: 30px;
    }

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 402px) {
    width: 150px;
    justify-content: center;
    gap: 4px;
    border-radius: 16px;

    h1 {
      width: max-content;
      font-size: 26px;
    }

    p {
      width: max-content;
      font-size: 12px;
    }
  }

  @media (max-width: 380px) {
    width: 120px;

    h1,
    p {
      max-width: 90px;
    }
  }
`;
