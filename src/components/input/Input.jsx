import React from "react";
import styled from "styled-components";

export default function Input({
  label,
  labelColor,
  type = "text",
  onChange,
  placeholder,
}) {
  return (
    <StyledInput>
      <label htmlFor="" style={{ color: labelColor ? "#402E32" : "#fff" }}>
        {label}
      </label>
      {type === "tel" ? (
        <input
          type={type}
          onChange={(e) => {
            if (e.target.value.length !== 14) {
              onChange();
            }
          }}
          placeholder={placeholder}
        />
      ) : (
        <input type={type} onChange={onChange} placeholder={placeholder} />
      )}
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
