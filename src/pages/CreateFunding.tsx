import Header from "../components/Header";
import Footer from "../components/Footer";
import "./../css/CreateFunding.scss";
import { useState } from "react";
const CreateFunding = () => {
  const [fundingData, setFundingData] = useState("d");
  return (
    <div>
      <div className="CreateFunding">
        <div className="form">
          <table>
            <tr>
              <td className="head">타이틀</td>
              <td>
                <input className="input" />
              </td>
            </tr>
            <tr>
              <td className="head">목표금액</td>
              <td>
                <input className="input" />
              </td>
            </tr>
            <tr>
              <td className="head">시작날짜</td>
              <td>
                <input className="input" type="date" />
              </td>
            </tr>
            <tr>
              <td className="head">종료날짜</td>
              <td>
                <input className="input" type="date" />
              </td>
            </tr>
            <tr>
              <td className="head">썸네일</td>
              <td>
                <input className="input thumbnail" type="file" />
              </td>
            </tr>
            <tr>
              <td className="head">카테고리</td>
              <td>
                <select className="input">
                  <option>펀드</option>
                  <option>부동산</option>
                  <option>주식</option>
                  <option>금융권 취업</option>
                </select>
              </td>
            </tr>
          </table>
        </div>
        <div className="create">
          <button>펀딩등록</button>
        </div>
      </div>
    </div>
  );
};

export default CreateFunding;
