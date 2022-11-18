import React from "react";
import styled from "styled-components";

export default function Button({
  children,
  filter,
  width,
  bg = false,
  style = "",
  onClick,
}) {
  return (
    <StyledButton
      className={(filter ? "filter-btn " : "") + (bg ? "on" : "off")}
      style={{ width: `${width ? width : "auto"}`, padding: style }}
      onClick={onClick}
    >
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

  &.filter-btn {
    padding: 6px 10px;
    background: #960000;
    border: 2px solid #960000;
    border-radius: 6px;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #fff;

    &:hover,
    &:focus {
      outline: none;
      color: #960000;
      background-color: #fff;
    }
  }
`;
