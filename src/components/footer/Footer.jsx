import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Images
import logo from "../../assets/logo/logo_black.svg";
import rteco from "../../assets/icons/rteco.png";

export default function Footer() {
  return (
    <StyledFooter>
      <div className="left">
        <Link to="home">
          <img src={logo} alt={logo} />
        </Link>
        <p>
          2022 ООО "B-Invest". Информация на сайте представлена в информационных
          целях. Свяжитесь с менеджерами компании для получения более конкретной
          информации+998 71 230 13 31
        </p>
      </div>
      <div className="center">
        <img src={rteco} alt={rteco} />
      </div>
      <div className="right">
        <div className="phone__wrapper">
          <p>Телефон</p>
          <div className="tel">
            <p>+ 998 (71) 671-2275</p>
            <a href="tel:+ 998 (71) 671-2275">Заказать звонок</a>
          </div>
        </div>
        <div className="social_media_wrapper">
          <p>Социальные сети</p>
          <div className="social-media">
            <a href="https://jasurbek-shomaqsudov.vercel.app">
              <i className="icon icon-instagram"></i>
            </a>
            <a href="https://jasurbek-shomaqsudov.vercel.app">
              <i className="icon icon-facebook"></i>
            </a>
            <a href="https://jasurbek-shomaqsudov.vercel.app">
              <i className="icon icon-telegram"></i>
            </a>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  padding: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 60px;
  flex-wrap: wrap;
  background: #fff;
  border-radius: 40px;

  .left {
    p {
      margin-top: 26px;
      max-width: 400px;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: #464243;
    }
  }

  .center {
    margin-top: auto;
  }

  .right {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 60px;
    flex-wrap: wrap;

    & > div > p {
      margin-bottom: 19px;
      font-weight: 400;
      font-size: 16px;
      line-height: 120%;
      color: #464243;
    }

    .social-media {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;

      .icon {
        width: 23px !important;
        height: 23px !important;
      }
    }
  }
`;
