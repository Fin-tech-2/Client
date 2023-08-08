import Header from "../components/Header";
import "./../css/CreateFunding.scss";
import { useEffect, useState } from "react";
import { FundingData } from "../types";

const CreateFunding = () => {
  const [inputs, setInputs] = useState<FundingData>({
    title: "",
    cost: "",
    start: "",
    end: "",
    thumbnail: null,
    category: "",
  });

  const { title, cost, start, end, thumbnail, category } = inputs;

  const inputsHandler = (e: any) => {
    const { name, type } = e.target;

    if (type === "file") {
      setInputs({
        ...inputs,
        thumbnail: e.target.files[0],
      });
    } else {
      setInputs({
        ...inputs,
        [name]: e.target.value,
      });
    }
  };

  const createHandler = () => {
    //axios 처리
    console.log(inputs);
  };

  return (
    <div>
      <div className="CreateFunding">
        <Header />
        <div className="form">
          <table>
            <tr>
              <td className="head">타이틀</td>
              <td>
                <input
                  className="input"
                  name="title"
                  onChange={inputsHandler}
                />
              </td>
            </tr>
            <tr>
              <td className="head">목표금액</td>
              <td>
                <input className="input" name="cost" onChange={inputsHandler} />
              </td>
            </tr>
            <tr>
              <td className="head">시작날짜</td>
              <td>
                <input
                  className="input"
                  type="date"
                  name="start"
                  onChange={inputsHandler}
                />
              </td>
            </tr>
            <tr>
              <td className="head">종료날짜</td>
              <td>
                <input
                  className="input"
                  type="date"
                  name="end"
                  onChange={inputsHandler}
                />
              </td>
            </tr>
            <tr>
              <td className="head">썸네일</td>
              <td>
                <input
                  className="input thumbnail"
                  type="file"
                  onChange={inputsHandler}
                />
              </td>
            </tr>
            <tr>
              <td className="head">카테고리</td>
              <td>
                <select
                  className="input"
                  name="category"
                  onChange={inputsHandler}
                >
                  <option>재테크</option>
                  <option>주거</option>
                  <option>소비지출</option>
                  <option>신용관리</option>
                  <option>재무관리</option>
                  <option>금융권 취업</option>
                </select>
              </td>
            </tr>
          </table>
        </div>
        <div className="create">
          <button onClick={createHandler}>펀딩등록</button>
        </div>
      </div>
    </div>
  );
};

export default CreateFunding;
