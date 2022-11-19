import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function InputRange({
  defValue,
  defReset,
  label,
  labelColor,
  list,
  minDefValue,
}) {
  const [firstRangeValue, setFirstRangeValue] = useState(list[0].min);
  const [secondRangeValue, setSecondRangeValue] = useState(list[1].max);

  useEffect(() => {
    if (defValue !== "") {
      setFirstRangeValue(defValue[0].min);
      setSecondRangeValue(defValue[1].max);
    }

    defReset();
  }, [defValue]);

  return (
    <StyledInputRange>
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
      <output className="rangevalue__wrapper">
        <p>
          От{" "}
          {firstRangeValue == list[1].max
            ? "1 " + list[1].name
            : firstRangeValue + " " + list[0].name}
        </p>
        <span></span>
        <p>
          До{" "}
          {list[1].name === "млрд"
            ? secondRangeValue == list[1].max
              ? "1 " + list[1].name
              : secondRangeValue + " " + list[0].name
            : secondRangeValue + " " + list[0].name}
        </p>
      </output>
      <div className="inputs__wrapper">
        <div className="progress-line"></div>
        <input
          type="range"
          min={list[0].min}
          max={list[1].max}
          value={firstRangeValue}
          onChange={(e) => {
            if (
              !(Number(secondRangeValue - Number(e.target.value)) < minDefValue)
            ) {
              setFirstRangeValue(e.target.value);
            }
          }}
        ></input>
        <input
          type="range"
          min={list[0].min}
          max={list[1].max}
          value={secondRangeValue}
          onChange={(e) => {
            if (
              !(Number(e.target.value - Number(firstRangeValue)) < minDefValue)
            ) {
              setSecondRangeValue(e.target.value);
              console.log("kirdi !");
            }
          }}
        ></input>
      </div>
    </StyledInputRange>
  );
}

const StyledInputRange = styled.div`
  position: relative;
  width: 100%;

  .rangevalue__wrapper {
    padding: 17px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 220px;
    border-radius: 12px;
    background: #f5f5f7;
    width: 100%;

    p {
      font-size: 14px;
      line-height: 22px;
      color: #464243;
    }

    span {
      width: 20px;
      height: 0px;
      border: 2px solid rgba(216, 216, 216, 0.5);
      transform: rotate(-90deg);
    }
  }

  .inputs__wrapper {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;

    .progress-line {
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 2px;
      background: #d7b56d;
      /* background: red; */
    }
  }

  input {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 0px;
    background: none;
    pointer-events: none;
    /* background-image: linear-gradient(#ff4500, #ff4500);
    background-size: 100% 100%;
    background-repeat: no-repeat; */
    -webkit-appearance: none;

    &:focus {
      outline: none;

      &::-webkit-slider-thumb {
        background: #be9e58;
      }
    }

    &::-webkit-slider-thumb {
      cursor: ew-resize;
      pointer-events: auto;
      height: 16px;
      width: 16px;
      border-radius: 100%;
      background: #d7b56d;
      box-shadow: 0 0 2px 0 #555;
      -webkit-appearance: none;
      transition: background 0.3s ease-in-out;

      &:hover {
        background: #be9e58;
      }
    }

    &::-moz-slider-thumb {
      cursor: ew-resize;
      height: 16px;
      width: 16px;
      border-radius: 100%;
      background: #d7b56d;
      box-shadow: 0 0 2px 0 #555;
      -moz-appearance: none;
      transition: background 0.3s ease-in-out;

      &:hover {
        background: #be9e58;
      }
    }

    /* &:last-of-type {
      left: 0%;
      transform: translateX(100%);
    } */
  }
`;
