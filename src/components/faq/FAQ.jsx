import React from "react";
import styled from "styled-components";

// Components
import Select from "../select/Select";

// Images
import FAQ_IMG from "../../assets/img/FAQ-img.png";
import Input from "../input/Input";
import Button from "../button/Button";

export default function FAQ() {
  return (
    <StyledFAQ
      style={{
        backgroundColor: "#fff",
        background: `url(${FAQ_IMG})`,
      }}
    >
      <h1 className="head-title">Остались вопросы?</h1>
      <p>Оставьте свои контактные данные, и мы свяжемся с вами</p>
      <form className="faq-form__wrapper">
        <div className="input__wrapper">
          <Input labelColor label="Ваше имя" placeholder="Напишите свое имя" />
        </div>
        <div className="input__wrapper">
          <Input
            labelColor
            type="tel"
            label="Ваш телефон"
            placeholder="+998 (__)___-____"
          />
        </div>
        <div className="select__wrapper">
          <Select
            defValue="Сегодня"
            labelColor
            label="Когда вам позвонить (дата)"
            bg={true}
            list={["Сегодня", "Завтра", "В любое время"]}
          />
        </div>
        <div className="select__wrapper">
          <Select
            defValue="Ближайшее"
            labelColor
            label="Когда вам позвонить (время)"
            bg={true}
            list={["Ближайшее", "От 9:00 До 18:00", "В любое время"]}
          />
        </div>
        <div className="button__wrapper">
          <Button width="100%" style="17px 33px" bg={true}>
            Отправить
          </Button>
        </div>
      </form>
    </StyledFAQ>
  );
}

const StyledFAQ = styled.section`
  margin: 120px 0px 30px;
  padding: 30px;
  border-radius: 40px;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat;

  p {
    margin: 12px 0px 30px;
    max-width: 345px;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #464243;
  }

  .faq-form__wrapper {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 30px;

    .input__wrapper,
    .select__wrapper {
      width: 273px !important;
    }

    .button__wrapper {
      width: 160px;
    }
  }

  @media (max-width: 685px) {
    .faq-form__wrapper {
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .input__wrapper,
      .select__wrapper,
      .button__wrapper {
        width: 100% !important;
      }
    }
  }
`;
