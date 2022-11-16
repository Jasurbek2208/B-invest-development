import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function InputRange({ label, labelColor, list }) {
  const [firstRangeValue, setFirstRangeValue] = useState(list[0].min);
  const [secondRangeValue, setSecondRangeValue] = useState(list[1].max);

  function valueWatcher() {
    if (firstRangeValue > secondRangeValue)
      setSecondRangeValue(firstRangeValue);
  }

  useEffect(() => {
    valueWatcher();
  }, [firstRangeValue, secondRangeValue]);

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
          {secondRangeValue == list[1].max
            ? "1 " + list[1].name
            : secondRangeValue + " " + list[0].name}
        </p>
      </output>
      <div className="inputs__wrapper">
        <input
          type="range"
          min={list[0].min}
          max={list[1].max}
          value={firstRangeValue}
          onChange={(e) => {
            setFirstRangeValue(e.target.value);
            valueWatcher();
          }}
        ></input>
        <input
          type="range"
          min={list[0].min}
          max={list[1].max}
          value={secondRangeValue}
          onChange={(e) => setSecondRangeValue(e.target.value)}
        ></input>
      </div>
    </StyledInputRange>
  );
}

const StyledInputRange = styled.div`
  position: relative;

  .rangevalue__wrapper {
    padding: 17px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 220px;
    border-radius: 12px;
    background: #f5f5f7;

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

  input {
    position: absolute;
    bottom: 0px;
    left: 0px;
    -webkit-appearance: none;
    width: 110px;
    height: 0px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    border: 2px solid #d7b56d;
    background-image: linear-gradient(#ff4500, #ff4500);
    background-size: 100% 100%;
    background-repeat: no-repeat;

    &:focus {
      outline: none;

      &::-webkit-slider-thumb {
        background: #be9e58;
      }
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 16px;
      width: 16px;
      border-radius: 100%;
      background: #d7b56d;
      cursor: ew-resize;
      box-shadow: 0 0 2px 0 #555;
      transition: background 0.3s ease-in-out;

      &:hover {
        background: #be9e58;
      }
    }

    &:last-of-type {
      left: 0%;
      transform: translateX(100%);
    }
  }
`;
