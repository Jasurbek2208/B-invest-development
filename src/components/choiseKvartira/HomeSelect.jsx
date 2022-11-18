import React from "react";
import styled from "styled-components";

// Components
import Button from "../button/Button";
import Select from "../select/Select";
import InputRange from "../input/InputRange";
import { useState } from "react";
import Map from "../mapLocation/Map";
import { useEffect } from "react";

export default function HomeSelect({ setIsWrap }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);

  //
  const list1 = ["Коммерческий", "НеКоммерческий"];
  const list2 = ["Комфорт", "НеКомфорт"];

  useEffect(() => {
    isSearchOpen || isMapOpen ? setIsWrap(true) : setIsWrap(false);
  }, [isSearchOpen, isMapOpen]);

  return (
    <StyledHomeSelect>
      <h1 className="head-title">Выберите квартиру</h1>
      <div
        className={(isSearchOpen ? "On " : "") + "mobile-filter-back__wrapper"}
        onClick={() => setIsSearchOpen(false)}
      ></div>
      <div className={(isSearchOpen ? "On " : "") + "select__wrapper"}>
        <div className="top">
          <h4>Фильтр</h4>
          <div className="filter-close-btn__wrapper">
            <Button filter>Сбросить</Button>
            <button
              type="button"
              className="close-btn"
              onClick={() => setIsSearchOpen(false)}
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        <div className="mob-form-wrapper">
          <Select labelColor label="Вид жилища" bg={true} list={list1} />
        </div>
        <div className="mob-form-wrapper">
          <Select labelColor label="Категория жилищ" bg={true} list={list2} />
        </div>
        <div className="mob-form-wrapper">
          <InputRange
            minDefValue={10}
            labelColor
            label="Площадь"
            list={[
              { min: 30, name: "м2" },
              { max: 100, name: "м2" },
            ]}
          />
        </div>
        <div className="mob-form-wrapper">
          <InputRange
            minDefValue={100}
            labelColor
            label="Цена"
            list={[
              { min: 500, name: "млн" },
              { max: 1000, name: "млрд" },
            ]}
          />
        </div>
        <div className="mob-form-wrapper">
          <Button width="100%" style="15px 42px" bg={true}>
            Поиск
          </Button>
        </div>
      </div>
      <div className="mobile-select__wrapper">
        <div className="mobile-btn__wrapper">
          <Button bg width="100%" onClick={() => setIsSearchOpen(true)}>
            Найти
          </Button>
        </div>
        <div className="mobile-btn__wrapper">
          <Button width="100%" onClick={() => setIsMapOpen(true)}>
            На карте
          </Button>
        </div>
      </div>
      <div className={(isMapOpen ? "On " : "") + "search-from-map__wrapper"}>
        <button
          type="button"
          className="map-close-btn"
          onClick={() => setIsMapOpen(false)}
        >
          <span></span>
          <span></span>
        </button>
        {isMapOpen ? <Map mobile /> : null}
      </div>
    </StyledHomeSelect>
  );
}

const StyledHomeSelect = styled.div`
  padding-top: 120px;

  h1 {
    margin-bottom: 30px;
    font-weight: 600;
    font-size: 40px;
    line-height: 120%;
    letter-spacing: -0.04em;
    color: #402e32;
  }

  .mobile-filter-back__wrapper {
    display: none;
    transition: 1s;
  }

  .map-close-btn {
    display: none;
  }

  .select__wrapper {
    background: #fff;
    border-radius: 20px;
    padding: 30px 28px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 28px;

    div:not(.top, .filter-close-btn__wrapper) {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      row-gap: 5px;
    }

    & > .top {
      display: none;
    }
  }

  .mobile-select__wrapper {
    display: none;
  }

  .search-from-map__wrapper {
    display: none;
  }

  @media (max-width: 580px) {
    padding-top: 0px;

    .select__wrapper {
      position: fixed;
      width: 0%;
      bottom: -100vh;
      left: -40vw;
      opacity: 0;
      gap: 20px;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
      transition: 200ms ease-in-out;
      z-index: 50;

      & > .top {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;

        .filter-close-btn__wrapper {
          display: flex;
          align-items: center;
          gap: 36px;

          & > button.close-btn {
            cursor: pointer;
            position: relative;
            border: none;
            width: 18px;
            height: 18px;
            background: none;
            transition: 200ms;

            & > span {
              position: absolute;
              top: 8px;
              left: 0px;
              width: 17px;
              height: 3px;
              background-color: #464243;
              transform: rotate(48deg);

              &:last-of-type {
                transform: rotate(-48deg);
              }
            }

            &:hover,
            &:focus {
              outline: none;
              transform: scale(110%);
            }
          }
        }
      }

      .mob-form-wrapper {
        width: 100%;
      }

      &.On {
        position: fixed;
        width: 100%;
        bottom: 0px;
        left: 0px;
        opacity: 1;
        transform: scale(1);
      }
    }

    .mobile-filter-back__wrapper.On {
      display: flex;
      position: fixed;
      bottom: 0px;
      left: 0px;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.2);
      z-index: 50;
    }

    .mobile-select__wrapper {
      display: flex;
      margin-bottom: -80px;
      align-items: center;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;

      .mobile-btn__wrapper {
        width: 162px;
      }
    }

    .search-from-map__wrapper {
      display: flex;
      transition: 150ms ease-in-out;

      &.On {
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        z-index: 90;

        .map-close-btn {
          display: flex;
          position: absolute;
          top: 16px;
          right: 16px;
          border: none;
          width: 40px;
          height: 40px;
          background: #fff;
          border-radius: 100%;
          transition: 200ms;
          z-index: 100;
          cursor: pointer;

          & > span {
            position: absolute;
            top: 18px;
            left: 30%;
            width: 17px;
            height: 3px;
            background-color: #464243;
            transform: rotate(48deg);

            &:last-of-type {
              transform: rotate(-48deg);
            }
          }

          &:hover,
          &:focus {
            outline: none;
            transform: scale(110%);
          }
        }
      }
    }
  }
  @media (max-width: 400px) {
    .mobile-select__wrapper {
      flex-direction: column;

      .mobile-btn__wrapper {
        width: 100%;
      }
    }
  }
`;
