import React, { useState } from "react";
import styled from "styled-components";

// components
import Button from "../button/Button";

// Images
import caruselmg1 from "../../assets/img/carusel-img-1.jpg";
import caruselmg2 from "../../assets/img/carusel-img-2.jpg";
import caruselmg3 from "../../assets/img/carusel-img-3.jpg";
import caruselmg4 from "../../assets/img/backgroundImg.png";
import caruselmg5 from "../../assets/img/carusel-img-5.jpg";
import caruselmg6 from "../../assets/img/carusel-img-6.jpg";

// icons
import leftArrow from "../../assets/icons/Arrow - Left 2.png";
import rightArrow from "../../assets/icons/Arrow - Right 2.png";
import call from "../../assets/icons/Call.svg";
import comment from "../../assets/icons/comment-discussion.svg";
import telegram from "../../assets/icons/telegram.svg";
import { useEffect } from "react";

export default function Header() {
  const imgArr = [
    caruselmg4,
    caruselmg1,
    caruselmg2,
    caruselmg3,
    caruselmg5,
    caruselmg6,
  ];
  const [currImg, setCurrImg] = useState(imgArr[0]);
  const [carruselCount, setCarruselCount] = useState(1);
  let localNum = 0;

  function carruselRight() {
    imgArr.forEach((i, idx) => {
      if (currImg === i) {
        setCurrImg(imgArr[imgArr.length === idx + 1 ? 0 : idx + 1]);
        setCarruselCount((imgArr.length === idx + 1 ? 0 : idx + 1) + 1);
      }
    });
  }

  function carruselLeft() {
    imgArr.forEach((i, idx) => {
      if (currImg === i) {
        setCurrImg(imgArr[0 === idx ? imgArr.length - 1 : idx - 1]);
        setCarruselCount((0 === idx ? imgArr.length - 1 : idx - 1) + 1);
      }
    });
  }

  useEffect(() => {
    localNum += 1;
    if (localNum === 1)
      setInterval(function () {
        carruselRight();
      }, 10000);
  }, []);

  return (
    <StyledHeader>
      <div
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 57.17%), url(${currImg})`,
        }}
      >
        <div className="right__wrapper">
          <h1>Chashma проект ваших будущих домов</h1>
          <div className="btn__wrapper">
            <Button bg={true}>Наши проекты</Button>
          </div>
        </div>

        <div className="center">
          <p>0{carruselCount}/06</p>
        </div>

        <div className="left__wrapper">
          <img src={leftArrow} alt="leftArrow" onClick={carruselLeft} />
          <img src={rightArrow} alt="rightArrow" onClick={carruselRight} />
        </div>
        <div className="fixed-social-icons">
          <div
            style={{ backgroundImage: `url(${call})` }}
            className="icon call"
          ></div>
          <div
            style={{ backgroundImage: `url(${telegram})` }}
            className="icon telegram"
          ></div>
          <div
            style={{ backgroundImage: `url(${comment})` }}
            className="icon comment"
          ></div>
        </div>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  margin-top: 30px;
  & > div {
    padding: 30px;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    height: 620px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 40px;

    .right__wrapper {
      max-width: 686px;

      h1 {
        margin-bottom: 43px;
        font-weight: 600;
        font-size: 56px;
        line-height: 120%;
        letter-spacing: -0.04em;
        color: #fff;
      }
    }

    .center {
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(255, 255, 255, 0.35);
      border-radius: 6px;
      padding: 7px 15px;

      p {
        color: #fff;
      }
    }

    .left__wrapper {
      display: flex;
      align-items: center;
      gap: 15px;

      img {
        cursor: pointer;
      }
    }

    .fixed-social-icons {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
      right: -30px;
      top: 50%;

      .icon {
        width: 42px;
        height: 42px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;

        &.comment {
          width: 70px;
          height: 70px;
        }
      }
    }
    @media (max-width: 1120px) {
      .fixed-social-icons {
        right: -15px;

        .icon {
          width: 36px;
          height: 36px;

          &.comment {
            width: 50px;
            height: 50px;
          }
        }
      }
    }
  }

  @media (max-width: 820px) {
    padding: 0px;
    margin: 0px;

    & > div {
      height: 100vh;
      border-radius: 0px;

      .right__wrapper {
        max-width: 360px;

        h1 {
          font-size: 46px;
        }

        .btn__wrapper {
          width: 100%;
        }
      }

      .center,
      .left__wrapper,
      .fixed-social-icons {
        display: none;
      }
    }
  }

  @media (max-width: 400px) {
    & > div {
      padding: 0px 16px 30px;

      .right__wrapper {
        max-width: 312px;

        h1 {
          font-size: 36px;
        }
      }
    }
  }
`;
