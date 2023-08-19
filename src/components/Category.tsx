import {
  AiOutlineStar,
  AiOutlineHome,
  AiOutlineRise,
  AiOutlineBank,
  AiOutlineWallet,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import "./../css/Category.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { PreviewData } from "../types";
import PreviewForm from "./PreviewForm";
import { calculateDday } from "../util/calculateDday";

const Category = () => {
  const [data, setData] = useState<PreviewData[]>([]);
  const [selectCategory, setSelectCategory] = useState<string>("");

  useEffect(() => {
    const option = {
      url: "/api/articles",
      method: "GET",
    };

    axios(option)
      .then((res) => {
        console.log(res);
        const transformedData = res.data.map((item: any) => {
          const dday = calculateDday(item.startdate, item.enddate);
          return {
            id: item.id,
            percentage: "98",
            price: item.price,
            dday: `D-${dday}`,
            title: item.title,
            thumbnail: item.thumbnail,
            category: item.category,
          };
        });

        setData(transformedData);
        sessionStorage.setItem("projectList", JSON.stringify(transformedData));
      })
      .catch(() => {
        console.log("불러오기 실패");
      });
  }, []);

  useEffect(() => {}, [selectCategory]);

  const categoryClickHandler = (categoryName: string) => {
    setSelectCategory(categoryName);
  };

  return (
    <div className="Category">
      <ul>
        <li onClick={() => categoryClickHandler("재테크")}>
          <AiOutlineStar className="icon" />
          재테크
        </li>
        <li onClick={() => categoryClickHandler("주거")}>
          <AiOutlineHome className="icon" />
          주거
        </li>
        <li onClick={() => categoryClickHandler("소비지출")}>
          <AiOutlineWallet className="icon" />
          소비지출
        </li>
        <li onClick={() => categoryClickHandler("신용관리")}>
          <AiOutlineCheckCircle className="icon" />
          신용관리
        </li>
        <li onClick={() => categoryClickHandler("재무설계")}>
          <AiOutlineRise className="icon" />
          재무설계
        </li>
        <li onClick={() => categoryClickHandler("금융권취업")}>
          <AiOutlineBank className="icon" />
          금융권 취업
        </li>
      </ul>
      <PreviewForm data={data} category={selectCategory} />
    </div>
  );
};

export default Category;
