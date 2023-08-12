import { useState } from "react";
import Header from "../components/Header";
import "./../css/DetailPage.scss";
import { AiOutlineRight, AiOutlineShareAlt } from "react-icons/ai";
import NumberWithComma from "../components/NumberWithComma";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
  const navigate = useNavigate();

  const dataString = sessionStorage.getItem("data");
  const data = dataString ? JSON.parse(dataString) : null;

  const [isMoreView, setIsMoreView] = useState(false);
  console.log(data);
  const onClickMoreView = () => {
    setIsMoreView(!isMoreView);
  };

  const onClickPayment = () => {
    navigate(`/payment/${data.id}`);
  };
  return (
    <div className="DetailPage">
      <Header />
      <div className="form">
        <div className="left">
          <div className="detail">
            <img
              className="thumbnail"
              src={process.env.PUBLIC_URL + data.thumbnail}
            />
            <p className="notice">펀딩을 통해 출시된 강의 혜택을 제공합니다.</p>
            <div className="event">
              <div className="event_title">
                <p className="event_title_1">새소식</p>
                <p className="event_title_2">리워드 안내</p>
              </div>
              <div className="event_content">
                <p>♥️깜짝이벤트♥️ 리워드 100% 돌파 추가 리워드 공지</p>
                <AiOutlineRight />
              </div>
            </div>
          </div>
          <div className="about_project">
            <p>프로젝트 스토리</p>
            <div
              className={`image-wrapper ${isMoreView ? "is-more-view" : ""}`}
            >
              <img
                className="project_img"
                src={process.env.PUBLIC_URL + `/assets/detail_project.svg`}
              />
            </div>
            <div
              className={`more-view-button-wrapper ${
                isMoreView ? "is-more-view" : ""
              }`}
            >
              <button className="project_button" onClick={onClickMoreView}>
                {isMoreView ? "스토리 접기" : "스토리 더보기"}
              </button>
            </div>
          </div>
          <div className="more_menu"></div>
        </div>

        <div className="right">
          <div className="payment">
            <div className="payment_form">
              <div className="top">
                <p>{data.title}</p>
                <AiOutlineShareAlt />
              </div>
              <div className="mid">
                <p>
                  여기는 간단 소개글 여기는 간단 소개글 여기는 간단 소개글
                  여기는 간단 소개글 여기는 간단 소개글 여기는 간단 소개글
                </p>
              </div>
              <div className="btm">
                <NumberWithComma
                  number={Number(data.percentage) * Number(data.price)}
                />
                <p className="percentage">{data.percentage}% 달성</p>
                <p className="dday">{data.dday}</p>
              </div>
              <div className="pay">
                <button onClick={onClickPayment}>후원하기</button>
              </div>
            </div>
            <div className="about_instructor">
              <img
                src={process.env.PUBLIC_URL + `/assets/lectureprofile.svg`}
              />
            </div>
            <div className="reward">
              <img src={process.env.PUBLIC_URL + `/assets/reward.svg`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
