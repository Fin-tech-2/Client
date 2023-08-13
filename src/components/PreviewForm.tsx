import { useNavigate } from "react-router-dom";
import { PreviewData } from "../types";
import "./../css/PreviewForm.scss";
interface PreviewFormProps {
  data: PreviewData[];
  category: string;
}

const PreviewForm = ({ data, category }: PreviewFormProps) => {
  const navigate = useNavigate();

  const goDetailPage = (it: PreviewData) => () => {
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
              <p className="percentage">{it.percentage}% 달성</p>
              <p className="price">{it.price}원</p>
              <p className="dday">{it.dday}</p>
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
