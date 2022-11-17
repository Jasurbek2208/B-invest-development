import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Components
import Button from "../button/Button";
import Select from "../select/Select";

export default function Navbar({ setIsWrap }) {
  const [isOpen, setIsOpen] = useState(false);
  const list = ["Ру", "Eng", "Uz"];

  useEffect(() => {
    isOpen ? setIsWrap(true) : setIsWrap(false);
  }, [isOpen]);

  return (
    <StyledNavbar>
      <Link to="home">
        <i className="icon page-logo"></i>
      </Link>
      <ul className={(isOpen ? "On " : "") + "list__wrapper"}>
        <li className="list">Размещение</li>
        <li className="list">Новости</li>
        <li className="list">Акции</li>
        <li className="list">О нас</li>
      </ul>
      <div
        className={(isOpen ? "On " : "") + "navClose"}
        onClick={() => setIsOpen(false)}
      ></div>
      <div className="right__wrapper">
        <Select lang list={list} />
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
  }

  @media (max-width: 800px) {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
    align-items: flex-start;
    border-radius: 0px;
    background-color: #fff0;
    overflow-x: hidden;
    overflow-y: hidden;

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
      background-color: #d7b56d;
      transition: 300ms ease-in-out;

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
