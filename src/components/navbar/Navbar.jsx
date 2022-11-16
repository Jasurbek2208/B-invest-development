import React from "react";
import styled from "styled-components";

// images
import Button from "../button/Button";
import Select from "../select/Select";

export default function Navbar() {
  const list = ["Ру", "Eng", "Uz"];

  return (
    <StyledNavbar>
      <i className="icon page-logo"></i>
      <ul className="list__wrapper">
        <li className="list">Размещение</li>
        <li className="list">Новости</li>
        <li className="list">Акции</li>
        <li className="list">О нас</li>
      </ul>
      <div className="right__wrapper">
        <Select lang list={list} />
        <div className="tel">
          <p>+ 998 (71) 671-2275</p>
          <a href="tel:+ 998 (71) 671-2275">Заказать звонок</a>
        </div>
        <Button>Контакты</Button>
      </div>
      <div className="btn-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  padding: 19px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-radius: 20px;

  .list__wrapper {
    display: flex;
    align-items: center;
    gap: 40px;

    .list {
      cursor: pointer;
      font-weight: 500;
      font-size: 18px;
      line-height: 25px;
      color: #402e32;
    }
  }

  .right__wrapper {
    display: flex;
    align-items: center;
    gap: 60px;
  }

  .btn-menu {
    display: none;
  }

  @media (max-width: 1150px) {
    .right__wrapper {
      display: none;
    }

    .btn-menu {
      width: 24px;
      height: 17px;
      cursor: pointer;
      position: relative;
      display: flex;
      flex-direction: column;

      span {
        cursor: pointer;
        position: absolute;
        top: 0px;
        right: 0px;
        width: 18px;
        height: 3px;
        background-color: #fff;

        &:nth-of-type(2) {
          width: 27px;
          top: 7px;
        }

        &:last-of-type {
          width: 13px;
          top: 14px;
        }
      }
    }
  }

  @media (max-width: 800px) {
    position: absolute;
    width: 100%;
    z-index: 10;
    background-color: #fff0;

    .page-logo {
      width: 155px;
      height: 45px;
      background-color: #fff;
    }

    .list__wrapper {
      display: none;
    }
  }

  @media (max-width: 500px) {
    padding: 19px 16px;
  }
`;
