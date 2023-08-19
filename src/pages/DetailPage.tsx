import { useEffect, useState } from "react";
import Header from "../components/Header";
import "./../css/DetailPage.scss";
import { AiOutlineRight, AiOutlineShareAlt } from "react-icons/ai";
import NumberWithComma from "../components/NumberWithComma";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FundingData } from "../types";
import { calculateDday } from "../util/calculateDday";
import { calculatePercentage } from "../util/calculatePercentage";
import { Modal } from "antd";
import Map from "../components/Map";

const DetailPage = () => {
  const navigate = useNavigate();

  const params = useParams();
  const id = params.id;

  const [isMoreView, setIsMoreView] = useState(false);
  const [data, setData] = useState<FundingData | undefined>();
  const [price, setPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickMoreView = () => {
    setIsMoreView(!isMoreView);
  };

  const onClickPayment = () => {
    navigate(`/payment/${id}`);
  };

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const option = {
      url: `/api/articles/${id}`,
      method: "GET",
    };
    axios(option)
      .then((res) => {
        console.log(res.data);
        const project = {
          id: res.data.id,
          title: res.data.title,
          content: res.data.content,
          goalPrice: res.data.goalprice,
          price: res.data.price,
          startdate: res.data.startdate,
          enddate: res.data.enddate,
          thumbnail: res.data.thumbnail,
          introductionImg: res.data.introductionimg,
          category: res.data.category,
          student: res.data.student,
        };

        setData(project);
        setPrice(Number(res.data.price) * res.data.student);
      })
      .catch(() => {
        alert("불러오기에 실패하였습니다.");
      });
  }, []);

  return (
    <div className="DetailPage">
      <Header />
      <Modal
        className="custom-modal"
        visible={isModalOpen}
        onOk={handleModalClose}
        onCancel={handleModalClose}
        cancelButtonProps={{ style: { display: "none" } }}
        centered
      >
        <div className="popup-content">
          <h1> 지금이 기회예요!</h1>
          <h2>
            {" "}
            평균보다{" "}
            <span style={{ backgroundColor: "#ebff00", padding: "0 5px" }}>
              무려 50% 저렴
            </span>
            한 가격으로 <br /> 강의를 수강하실 수 있습니다!
          </h2>
          <p>
            사람이 더 모이면 리워드가 추가될 수도 있어요 <br /> 공유하고 친구와
            함께 더 많은 혜택을 누려보세요
          </p>
        </div>
      </Modal>
      <div className="form">
        <div className="left">
          <div className="detail">
            <img
              className="thumbnail"
              src={
                process.env.PUBLIC_URL + `/assets/thumbnail/${data?.thumbnail}`
              }
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
              {data?.introductionImg == null ? (
                <>
                  {" "}
                  <img
                    className="project_img"
                    src={process.env.PUBLIC_URL + `/assets/detail_project.svg`}
                  />
                </>
              ) : (
                <>
                  {" "}
                  <img
                    className="project_img"
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/introductionImg/${data?.introductionImg}`
                    }
                  />
                </>
              )}
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
          <Map />
        </div>

        <div className="right">
          <div className="payment">
            <div className="payment_form">
              <div className="top">
                <p>{data?.title}</p>
                <AiOutlineShareAlt />
              </div>
              <div className="mid">
                <p>{data?.content}</p>
              </div>
              <div className="btm">
                {NumberWithComma(price)}
                <p className="percentage">
                  {calculatePercentage({
                    goalPrice: Number(data?.goalPrice ?? 0),
                    price: Number(data?.price ?? 0),
                    student: data?.student ?? 0,
                  })}
                  %
                </p>
                <p className="dday">
                  {`D-` + calculateDday(data?.startdate, data?.enddate)}
                </p>
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
