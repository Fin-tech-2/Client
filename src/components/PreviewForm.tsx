import { useNavigate } from "react-router-dom";
import { FundingData } from "../types";
import "./../css/PreviewForm.scss";
import { calculateDday } from "../util/calculateDday";
import { calculatePercentage } from "../util/calculatePercentage";
interface PreviewFormProps {
  data: FundingData[];
  category: string;
}

const PreviewForm = ({ data, category }: PreviewFormProps) => {
  const navigate = useNavigate();

  const goDetailPage = (it: FundingData) => () => {
    navigate(`/detail-page/${it.id}`);
    sessionStorage.setItem("data", JSON.stringify(it));
  };

  // 필터링된 데이터를 저장하는 변수
  const filteredData = category
    ? data.filter((item) => item.category === category)
    : data;

  return (
    <div className="PreviewForm">
      {filteredData.map((it) => (
        <div key={it.id}>
          <div className="preview_wrapper" onClick={goDetailPage(it)}>
            <div className="top">
              <img
                src={
                  process.env.PUBLIC_URL + `assets/thumbnail/${it.thumbnail}`
                }
                alt="Thumbnail"
              />
            </div>
            <div className="mid">
              <p className="percentage">
                {calculatePercentage({
                  goalPrice: Number(it.goalPrice),
                  price: Number(it.price),
                  student: it.student,
                })}
                % 달성
              </p>
              <p className="price">{it.price}원</p>
              <p className="dday">
                D-{String(calculateDday(it.startdate, it.enddate))}
              </p>
            </div>
            <div className="btm">
              <p className="title">{it.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PreviewForm;
