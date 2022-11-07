import React from "react";
import styled from "styled-components";

export default function Select({ bg, list }) {
  return (
    <div style={{ position: "relative" }}>
      <StyledSelect className={bg ? "back" : ""}>
        <option disabled value="">
          Tanlang
        </option>
        {list?.map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </StyledSelect>
      <span
        style={{
          cursor: "pointer",
          position: "absolute",
          top: "50%",
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
const StyledSelect = styled.select`
  padding: 5px;
  position: relative;
  cursor: pointer;
  width: 60px;
  border: none;
  border-radius: 12px;
  -webkit-appearance: none;
  -moz-appearance: none;

  &.back {
    padding: 17px 20px;
    min-width: 220px;
    background: #f5f5f7;
  }

  &:focus {
    outline: 2px solid #d7b56d;
  }
`;
