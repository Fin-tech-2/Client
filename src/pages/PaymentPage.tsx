import { Checkbox } from "antd";
import Header from "../components/Header";
import "./../css/PaymentPage.scss";
import {useEffect, useState} from "react";
import { Modal } from "antd";
import {useNavigate, useParams} from "react-router-dom";

const PaymentPage = () => {
  const dataString = sessionStorage.getItem("data");
  const data = dataString ? JSON.parse(dataString) : null;
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  const showModal = () => {
    setIsModalOpen(true);
    sessionStorage.setItem("purchase-detail", String(id))
  };

  useEffect(() => {
    setIsModalOpen(false);
  }, []);

  const handleModalClose = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  const handleButtonClick = (label: string) => {
    setActiveButton(label);
  };

  const buttons = [
    "카드 결제",
    "무통장 입금",
    "카카오 페이",
    "네이버 페이",
    "토스 페이",
  ];

  return (
    <div className="PaymentPage">
      <Header />
      <div className="payment-form">
        <p className="payment-title">결제하기</p>
        <div className="form-list">
          <div className="info">
            <div className="title head">주문 정보</div>
            <hr />
            <tr className="table">
              <td className="head">선택한 구성품</td>
              <td className="tail">{data.title}</td>
            </tr>
            <tr className="table">
              <td className="head">리워드 유형</td>
              <td className="tail">오프라인 강연 + 멘토링</td>
            </tr>
            <tr className="table">
              <td className="head">수량</td>
              <td className="tail">1개</td>
            </tr>
          </div>
          <div className="pay">
            <div className="title head">결제 금액</div>
            <hr />
            <tr className="table">
              <td className="head">총 상품 금액</td>
              <td className="tail">49,900원</td>
            </tr>
            <tr className="table">
              <td className="head">최종 가격</td>
              <td className="tail">49,900원</td>
            </tr>
          </div>
          <div className="option">
            <div className="title head">결제 방식</div>
            <hr />
            <div className="button-wrap">
              {buttons.map((btn) => (
                <button
                  key={btn}
                  onClick={() => handleButtonClick(btn)}
                  style={{
                    border: activeButton === btn ? "2px solid gray" : "",
                  }}
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
          <div className="check">
            <Checkbox />
            <p>(필수) 개인정보 제 3자 제공에 동의합니다</p>
          </div>
          <button className="pay-button" onClick={showModal}>결제하기</button>
          <Modal
              className="custom-modal"
              visible={isModalOpen}
              onOk={handleModalClose}
              onCancel={handleModalClose}
              cancelButtonProps={{ style: { display: "none" } }}
              centered
          >
            <div className="popup-content">
              <h1>멘티님 환영합니다! 🎉</h1>
              <h2>
                {" "}
                평균보다{" "}
                <span style={{ backgroundColor: "#ebff00", padding: "0 5px" }}>
              무려 50% 저렴
            </span>
                한 가격으로 <br /> 강연을 구매하셨어요!
              </h2>
              <p>
                사람이 더 모이면 리워드가 추가될 수도 있어요 <br /> 공유하고 친구와
                함께 더 많은 혜택을 누려보세요
              </p>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
