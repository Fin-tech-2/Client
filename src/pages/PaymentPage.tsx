import { Checkbox } from "antd";
import Header from "../components/Header";
import "./../css/PaymentPage.scss";
const PaymentPage = () => {
  const dataString = sessionStorage.getItem("data");
  const data = dataString ? JSON.parse(dataString) : null;
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
              <td className="tail">오프라인 강의 + 멘토링</td>
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
              <button>카드 결제</button>
              <button>무통장 입금</button>
              <button>카카오 페이</button>
              <button>네이버 페이</button>
              <button>토스 페이</button>
            </div>
          </div>
          <div className="check">
            <Checkbox />
            <p>(필수) 개인정보 제 3자 제공에 동의합니다</p>
          </div>
          <button className="pay-button">결제하기</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
