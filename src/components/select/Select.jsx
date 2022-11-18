import React from "react";
import { useState } from "react";
import styled from "styled-components";

export default function Select({ label, labelColor, bg, list, lang = false }) {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectValue, setSelectValue] = useState(list[0]);

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
      }}
    >
      <label
        htmlFor=""
        style={{
          color: labelColor ? "#402E32" : "#fff",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "22px",
        }}
      >
        {label}
      </label>
      <StyledSelect
        className={bg ? "back" : ""}
        onClick={() => setIsSelectOpen((p) => !p)}
      >
        {typeof selectValue === "string" ? (
          selectValue
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "6px",
              padding: "2px 20px 2px 5px",
            }}
          >
            <img src={selectValue.img} alt={selectValue.name} />
            <p>{selectValue.name}</p>
          </div>
        )}
        <ul
          className={
            (isSelectOpen ? "On " : "") +
            (typeof selectValue === "string" ? " default " : "") +
            "select-options"
          }
        >
          {typeof list[0] === "object"
            ? list?.map((i) => (
                <li key={i.name} onClick={() => setSelectValue(i)}>
                  <button type="button">
                    <img key={i.name} src={i.img} alt={i.name} />
                    {i.name}
                  </button>
                </li>
              ))
            : list?.map((i) => (
                <li key={i} onClick={() => setSelectValue(i)}>
                  <button type="button">{i}</button>
                </li>
              ))}
        </ul>
      </StyledSelect>
      <span
        style={{
          cursor: "pointer",
          position: "absolute",
          top: `${lang ? "50%" : "65%"}`,
          right: `${bg ? "24px" : "8px"}`,
          translate: "0% -50%",
          width: "9px",
          height: "9px",
          borderRight: "2px solid #402e32",
          borderBottom: "2px solid #402e32",
          rotate: "45deg",
        }}
      ></span>
    </div>
  );
}
const StyledSelect = styled.div`
  cursor: pointer;
  position: relative;
  padding: 5px;
  width: 100%;
  border: none;
  border-radius: 12px;
  -webkit-appearance: none;
  -moz-appearance: none;
  /* border: 1px solid red; */

  .select-options {
    position: absolute;
    padding: 10px 0px;
    top: 0px;
    left: 0px;
    min-width: 100%;
    opacity: 0;
    background: #fff;
    border-radius: 6px;
    z-index: 50;
    /* border: 1px solid red; */
    transform: scale(0);
    transition: opacity 1s, top 300ms;

    &.On {
      top: 100%;
      opacity: 1;
      transform: scale(1);
    }

    li {
      width: 100%;

      button {
        cursor: pointer;
        padding: 6px 9px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 6px;
        border: none;
        background-color: #fff;
        transition: 200ms;

        &:hover,
        &:focus {
          outline: none;
          background-color: #f5f5f7;
        }
      }
    }

    &.default {
      background: #f5f5f7;
      box-shadow: 0px 10px 150px rgba(224, 225, 236, 0.7);
      border-radius: 12px;

      li {
        padding: 0px 9px;
        background-color: #f5f5f7;

        button {
          background-color: #f5f5f7;

          &:hover,
          &:focus {
            background-color: #fff;
          }
        }
      }
    }
  }

  &.back {
    padding: 17px 20px;
    min-width: 220px;
    width: 100%;
    background: #f5f5f7;
  }

  &:focus {
    outline: 2px solid #d7b56d;
  }
`;
