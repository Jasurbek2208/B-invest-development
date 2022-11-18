import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Images
import russia from "../../assets/icons/russian-bayroq.png";
import uzbekistan from "../../assets/icons/uzbekistan-bayroq.png";
import english from "../../assets/icons/unitedKingdom-bayroq.png";

// Components
import Button from "../button/Button";
import Select from "../select/Select";

export default function Navbar({ setIsWrap }) {
  const [isOpen, setIsOpen] = useState(false);
  const list = [
    { name: "Ру", img: russia },
    { name: "Eng", img: english },
    { name: "Uz", img: uzbekistan },
  ];

  useEffect(() => {
    isOpen ? setIsWrap(true) : setIsWrap(false);
  }, [isOpen]);

  return (
    <StyledNavbar className={isOpen ? " On " : ""}>
      <Link to="home">
        <i className="icon page-logo"></i>
      </Link>
      <ul className={(isOpen ? "On " : "") + "list__wrapper"}>
        <li className="list">Размещение</li>
        <li className="list">Новости</li>
        <li className="list">Акции</li>
        <li className="list">О нас</li>
        <div className="select__wrapper">
          <Select lang list={list} />
        </div>
      </ul>
      <div
        className={(isOpen ? "On " : "") + "navClose"}
        onClick={() => setIsOpen(false)}
      ></div>
      <div className="right__wrapper">
        <div className="tel">
          <p>+ 998 (71) 671-2275</p>
          <a href="tel:+ 998 (71) 671-2275">Заказать звонок</a>
        </div>
        <Button>Контакты</Button>
      </div>
      <div className="btn-menu" onClick={() => setIsOpen((p) => !p)}>
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

  .navClose {
    display: none;
  }

  .list__wrapper {
    z-index: 200;
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

    .select__wrapper {
      max-width: 100px;
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
  }

  @media (max-width: 820px) {
    position: absolute;
    width: 100%;
    z-index: 10;
    align-items: flex-start;
    border-radius: 0px;
    background-color: #fff0;
    overflow-x: hidden;
    overflow-y: hidden;

    &.On {
      height: 100%;
    }

    .btn-menu {
      z-index: 200;
      margin-top: 22px;
      width: 29px;
      height: 19px;
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

    .page-logo {
      width: 155px;
      height: 45px;
      background-color: #fff;
    }

    .navClose.On {
      display: flex;
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100vh;
      z-index: 50;
    }

    .list__wrapper {
      padding: 30px;
      position: absolute;
      top: 0px;
      right: -200vw;
      width: 500px;
      height: 100vh;
      flex-direction: column;
      justify-content: center;
      background: #fff0;
      transition: all 300ms ease-in-out, background 0ms;

      .list {
        position: relative;
        color: #fff;
        font-weight: 600;

        &::before {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -9px;
          transform: translateX(-50%);
          width: 0%;
          height: 2px;
          background-color: #fff;
          transition: 300ms;
        }

        &:hover {
          &::before {
            width: 100%;
          }
        }
      }

      &.On {
        right: 0px;
        background: #d7b56d;
      }
    }
  }

  @media (max-width: 500px) {
    padding: 19px 16px;

    .list__wrapper {
      width: 100%;
    }
  }
`;
