import React from "react";
import styled from "styled-components";

import rightArrow from "../../assets/icons/Arrow - Right 2.png";

export default function ProjectCard({ img1, content }) {
  return (
    <StyledProjectCard
      img1={img1}
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5) 1.59%,rgba(0, 0, 0, 0.16) 74.86%), url(${img1}), no-repeat center`,
      }}
    >
      <div
        className="top"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5) 1.59%,rgba(0, 0, 0, 0.16) 74.86%), url(${img1}), no-repeat center`,
        }}
      ></div>
      <div className="bottom">
        <div className="left">
          <h3>{content.h3}</h3>
          <p>{content.p}</p>
          <div className="wrapper">
            <div>M</div>
            <p>{content.m}</p>
          </div>
          <h5>{content.sum}</h5>
        </div>
        <div className="right">
          <img src={rightArrow} alt="rightArrow" />
        </div>
      </div>
    </StyledProjectCard>
  );
}

const StyledProjectCard = styled.div`
  width: 48%;
  min-width: 240px;
  max-height: 360px;
  background-repeat: no-repeat !important;
  background-position: center !important;
  background-size: cover !important;
  border-radius: 40px;

  .top {
    display: none;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 30px;

    h3 {
      margin: 120px 0px 10px;
      font-weight: 600;
      font-size: 24px;
      line-height: 120%;
      letter-spacing: -0.04em;
      color: #fff;
    }

    p {
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      color: #fff;
    }

    .wrapper {
      margin: 30px 0px;
      display: flex;
      align-items: center;
      gap: 7px;

      & > div {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 12px;
        background: #d7b56d;
        border-radius: 6px;
      }
    }

    h5 {
      font-weight: 600;
      font-size: 20px;
      line-height: 120%;
      letter-spacing: -0.04em;
      color: #fff;
    }
  }

  @media (max-width: 1000px) {
    min-width: 500px;
  }

  @media (max-width: 550px) {
    min-width: 100%;
    border-radius: 12px;
    background: #fff !important;

    .top {
      display: flex;
      width: 100%;
      min-height: 200px;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      background-size: cover !important;
      background-position: center !important;
      background-repeat: no-repeat !important;
      color: #402e32;
    }

    .bottom {
      padding: 12px;
      position: relative;

      h3 {
        margin: 0px;
        max-width: 120px;
        font-size: 20px;
        line-height: 150%;
        color: #402e32;
      }

      p {
        font-size: 14px;
        line-height: 19px;
        color: #402e32;
      }

      .wrapper {
        margin: 0px;
        position: absolute;
        top: 21px;
        right: 12px;
      }

      h5 {
        margin: 16px 0px 21px;
        font-size: 18px;
        line-height: 120%;
        letter-spacing: -0.04em;
        color: #d7b56d;
      }

      .right {
        display: none;
      }
    }
  }
`;
