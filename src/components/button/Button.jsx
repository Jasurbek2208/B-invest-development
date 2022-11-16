import React from "react";
import styled from "styled-components";

export default function Button({ children, width, bg = false, style = "" }) {
  return (
    <StyledButton className={bg ? "on" : "off"} style={{ width: `${width ? width : "auto"}`, padding: style }}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  cursor: pointer;
  padding: 12px 18px;
  font-size: 18px;
  line-height: 25px;
  color: #d7b56d;
  border-radius: 6px;
  border: 2px solid #d7b56d;
  background-color: #fff0;
  transition: 300ms;

  &.on,
  &:hover,
  &:focus {
    outline: none;
    color: #fff;
    background-color: #d7b56d;
  }

  &.on {
    &:hover,
    :focus {
      color: #d7b56d;
      background-color: #fff0;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;
