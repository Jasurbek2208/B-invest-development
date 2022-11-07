import React from "react";
import styled from "styled-components";

export default function Input({ label, type = "text", onChange, placeholder }) {
  return (
    <StyledInput>
      <label htmlFor="">{label}</label>
      <input type={type} onChange={onChange} placeholder={placeholder} />
    </StyledInput>
  );
}

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #fff;
  }

  input {
    padding: 17px 20px;
    width: 100%;
    border: none;
    border-radius: 12px;
    background: #f5f5f7;

    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #464243;
    transition: 300ms;

    &:hover,
    &:focus {
      outline: 1px solid #464243;
    }
  }
`;
