import React, { useRef, useState } from "react";
import styled from "styled-components";

// Components
import CompanyStaticsCard from "../companyStaticsCard/CompanyStaticsCard";

// Images
import videoThumbnail from "../../assets/img/videoThumbnail.png";
import stockCardImg from "../../assets/img/stockCardImg.png";
import formCardImg from "../../assets/img/form-cardImg.png";
import Input from "../input/Input";

export default function AboutPage() {
  const vidRef = useRef(null);
  const [isPlay, setIsPlay] = useState(false);

  return (
    <StyledAboutPage>
      <h1 className="head-title">О нашей компании</h1>
      <div className="content__wrapper">
        <div className="top">
          <CompanyStaticsCard h1="125+" p="Проданных домов" />
          <CompanyStaticsCard h1="220+" p="Жилых помещений" />
          <CompanyStaticsCard h1="98%" p="Довольных клиентов" />
          <CompanyStaticsCard h1="6+" p="Лет на рынке" />
        </div>
        <div className="bottom">
          <video
            className="video"
            poster={videoThumbnail}
            controls
            ref={vidRef}
            onClick={() => setIsPlay((p) => !p)}
          >
            <source
              src={require("../../assets/video/backVideo.mp4")}
              type="video/mp4"
            ></source>
          </video>
          <div
            className={(isPlay ? "On " : "") + "video-play"}
            onClick={() => {
              vidRef.current.paused
                ? vidRef.current.play()
                : vidRef.current.pause();
              setIsPlay((p) => !p);
            }}
            onTouchMove={() => {
              vidRef.current.paused
                ? vidRef.current.play()
                : vidRef.current.pause();
              setIsPlay((p) => !p);
            }}
          >
            <div className="icon videoPlay"></div>
          </div>
        </div>
      </div>

      {/* aksiyalar */}
      <div className="stocks__wrapper">
        <h1 className="head-title">Акции</h1>
        <div className="content__wrapper">
          <div className="left">
            <div
              className="card"
              style={{
                background: `url(${stockCardImg})`,
              }}
            >
              <h5>Способы реализации стандартных подходов</h5>
              <p>
                Приятно, граждане, наблюдать, как явные признаки победы
                институционализации...
              </p>
            </div>
          </div>
          <div className="right">
            <div className="card">
              <h5>Способы реализации стандартных подходов</h5>
              <p>
                Приятно, граждане, наблюдать, как явные признаки победы
                институционализации...
              </p>
              <h6>2 дня</h6>
            </div>
            <div className="card">
              <h5>Способы реализации стандартных подходов</h5>
              <p>
                Приятно, граждане, наблюдать, как явные признаки победы
                институционализации...
              </p>
              <h6>2 дня</h6>
            </div>
            <div
              className="card card-form"
              style={{
                background: `url(${formCardImg}), no-repeat center`,
              }}
            >
              <h5>Подписаться на акции и новости</h5>
              <form className="form__wrapper">
                <div className="input__wrapper">
                  <Input label="Ваше имя" placeholder="Имя" />
                </div>
                <div className="input__wrapper">
                  <Input
                    label="Телефон"
                    type="tel"
                    placeholder="+998 (__) ___-____"
                  />
                </div>
                <button type="submit">
                  <i className="icon tgBorder"></i>
                  <p>Отправить</p>
                </button>
              </form>
              <p>
                Нажимая кнопку, высоглашаетесь с условиями обработки личных
                данных
              </p>
            </div>
          </div>
        </div>
      </div>
    </StyledAboutPage>
  );
}

const StyledAboutPage = styled.div`
  padding-top: 120px;

  & > h1 {
    margin-bottom: 30px;
    font-size: 40px;
    line-height: 120%;
    letter-spacing: -0.04em;
    color: #402e32;
  }

  .content__wrapper {
    .top {
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 30px;
    }

    .bottom {
      position: relative;

      .video {
        width: 100%;
        min-height: 400px;
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.25),
            rgba(0, 0, 0, 0.25)
          ),
          url(.jpg);
        border-radius: 40px;
      }

      .video-play {
        cursor: pointer;
        position: absolute;
        top: 50%;
        left: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70px;
        height: 70px;
        border-radius: 12px;
        transform: translate(-50%, -50%);
        background: rgba(255, 255, 255, 0.9);
        transition: 400ms ease-in-out;

        &:hover {
          opacity: 1;

          .icon.videoPlay {
            color: #c5a45c !important;
            background: #c5a45c !important;
          }
        }

        &.On {
          opacity: 0;

          .icon.videoPlay {
            mask-image: none;
            -webkit-mask-image: none;
            background: none !important;
            border-left: 10px solid #d7b56d !important;
            border-right: 10px solid #d7b56d !important;
          }

          &:hover {
            opacity: 1;

            .icon.videoPlay {
              color: none;
              background: none;

              .icon.videoPlay {
                border-left: 10px solid #c5a45c !important;
                border-right: 10px solid #c5a45c !important;
              }
            }
          }
        }
      }
    }
  }

  .stocks__wrapper {
    margin-top: 120px;

    h1 {
      margin-bottom: 30px;
      font-weight: 600;
      font-size: 40px;
      line-height: 120%;
      letter-spacing: -0.04em;
      color: #402e32;
    }

    .content__wrapper {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 30px;

      .card {
        padding: 30px;
        min-width: 360px;
        background: #fff;
        border-radius: 40px;
        background-size: cover !important;
        background-position: center !important;
        background-repeat: no-repeat !important;

        h5 {
          margin-bottom: 18px;
          max-width: 300px;
          font-weight: 600;
          font-size: 24px;
          line-height: 120%;
          letter-spacing: -0.04em;
          color: #402e32;
        }

        p {
          max-width: 300px;
          font-weight: 400;
          font-size: 18px;
          line-height: 150%;
          color: #000;
        }

        h6 {
          margin-top: 118px;
          font-size: 18px;
          line-height: 25px;
          color: #d7b56d;
        }
      }

      .left {
        width: max-content;

        & > .card {
          padding-bottom: 570px;
          min-width: 440px;

          h5 {
            max-width: 347px;
          }

          p {
            max-width: 387px;
          }
        }
      }

      .right {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;
        width: 760px;

        .card-form {
          max-width: 740px;
          width: 100%;

          h5 {
            min-width: max-content;
            color: #fff;
          }

          .form__wrapper {
            margin: 30px 0px 6px;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            flex-wrap: wrap;
            gap: 30px;

            .input__wrapper {
              width: 280px;
            }

            button {
              margin-left: -15px;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 56px;
              height: 56px;
              border: none;
              border-radius: 12px;
              background: #f5f5f7;
              transition: 300ms;

              &:hover,
              &:focus {
                outline: 1px solid #464243;
              }

              p {
                display: none;
              }
            }
          }

          p {
            font-size: 14px;
            line-height: 160%;
            color: #fff;
          }
        }
      }

      @media (max-width: 500px) {
        .card {
          width: 90%;
          min-width: 90%;

          h5 {
            max-width: 245px;
            font-size: 20px;
          }

          p,
          h6 {
            max-width: 245px;
            font-size: 16px;
          }

          h6 {
            margin-top: 130px;
          }
        }

        .left {
          .card {
            padding-bottom: 320px;
            min-width: 100% !important;
          }
        }

        .right {
          width: 100%;

          .card-form {
            h5 {
              max-width: 210px;
              min-width: 100px;
            }

            .form__wrapper {
              button {
                margin-left: 0px;
                width: 280px;
                border-radius: 6px;
                background: #d7b56d;

                i {
                  display: none;
                }

                p {
                  display: block;
                  font-size: 18px;
                  line-height: 25px;
                  color: #fff;
                }
              }
            }

            p:last-of-type {
              display: none;
            }
          }
        }
      }

      @media (max-width: 350px) {
        .card {
          border-radius: 20px;

          h5,
          p {
            max-width: 205px;
          }

          h6 {
            max-width: 205px;
            margin-top: 80px;
          }
        }

        .left {
          .card {
            padding-bottom: 280px;
            min-width: 100% !important;
          }
        }

        .right {
          min-width: 100% !important;

          .card {
            min-width: 100% !important;
          }
        }
      }
    }
  }

  @media (max-width: 500px) {
    .content__wrapper {
      .bottom {
        .video {
          min-height: 230px;
        }

        .video-play {
          width: 50px;
          height: 50px;

          .videoPlay {
            width: 18px;
            height: 21px;
          }
        }
      }
    }
  }
`;
