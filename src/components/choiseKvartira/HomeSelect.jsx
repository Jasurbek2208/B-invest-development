import React from "react";
import styled from "styled-components";
import Button from "../button/Button";
import InputRange from "../input/InputRange";
import Select from "../select/Select";

export default function HomeSelect() {
  const list1 = ["Коммерческий", "НеКоммерческий"];
  const list2 = ["Комфорт", "НеКомфорт"];

  return (
    <StyledHomeSelect>
      <h1 className="head-title">Выберите квартиру</h1>
      <div className="select__wrapper">
        <Select labelColor label="Вид жилища" bg={true} list={list1} />
        <Select labelColor label="Категория жилищ" bg={true} list={list2} />
        <InputRange
          labelColor
          label="Площадь"
          list={[
            { min: 30, name: "м2" },
            { max: 100, name: "м2" },
          ]}
        />
        <InputRange
          labelColor
          label="Цена"
          list={[
            { min: 500, name: "млн" },
            { max: 1000, name: "млрд" },
          ]}
        />
        <Button style="15px 42px" bg={true}>
          Поиск
        </Button>
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

  .select__wrapper {
    background: #fff;
    border-radius: 20px;
    padding: 30px 28px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 28px;

    div {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      row-gap: 5px;
    }
  }

  @media (max-width: 580px) {
    .select__wrapper {
      position: absolute;
      bottom: -1000vh;
      left: -1000vw;
    }
  }
`;
