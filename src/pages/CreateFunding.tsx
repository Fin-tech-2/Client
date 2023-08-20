import Header from "../components/Header";
import "./../css/CreateFunding.scss";
import { useState } from "react";
import { FundingData } from "../types";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const CreateFunding = () => {
  const navigate = useNavigate();

  const params = useParams();
  const id = params.id;

  const [inputs, setInputs] = useState<FundingData>({
    id: 0,
    title: "",
    content: "",
    goalPrice: "",
    price: "",
    startdate: "",
    enddate: "",
    thumbnail: null,
    introductionImg: null,
    category: "",
    student: 0,
  });

  const {
    title,
    content,
    goalPrice,
    price,
    startdate,
    enddate,
    thumbnail,
    introductionImg,
    category,
  } = inputs;

  const inputsHandler = (e: any) => {
    const { name, type } = e.target;

    if (type === "file") {
      setInputs({
        ...inputs,
        [name]: e.target.files[0],
      });
    } else {
      setInputs({
        ...inputs,
        [name]: e.target.value,
      });
    }
  };

  const createHandler = () => {
    sessionStorage.setItem("my-lecture", String(title))
    const option = {
      url: "/api/articles",
      method: "POST",
      data: {
        title: title,
        content: content,
        goalprice: goalPrice,
        price: price,
        startdate: startdate,
        enddate: enddate,
        thumbnail: thumbnail?.name,
        introductionimg: introductionImg?.name,
        category: category,
      },
    };

    axios(option).then((res) => {
      alert("펀딩 등록에 성공하였습니다!");
      navigate("/my-page", { replace: true });
    });

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
              <td className="head">강연 소개</td>
              <td>
                <textarea
                  className="input"
                  name="content"
                  onChange={inputsHandler}
                />
              </td>
            </tr>

            <tr>
              <td className="head">목표금액</td>
              <td>
                <input
                  className="input"
                  name="goalPrice"
                  onChange={inputsHandler}
                />
              </td>
            </tr>

            <tr>
              <td className="head">1인당 금액</td>
              <td>
                <input
                  className="input"
                  name="price"
                  onChange={inputsHandler}
                />
              </td>
            </tr>

            <tr>
              <td className="head">시작날짜</td>
              <td>
                <input
                  className="input"
                  type="date"
                  name="startdate"
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
                  name="enddate"
                  onChange={inputsHandler}
                />
              </td>
            </tr>
            <tr>
              <td className="head">썸네일</td>
              <td>
                <input
                  className="input file"
                  type="file"
                  name="thumbnail"
                  onChange={inputsHandler}
                />
              </td>
            </tr>
            <tr>
              <td className="head">강연 소개 이미지</td>
              <td>
                <input
                  className="input file"
                  type="file"
                  name="introductionImg"
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
