import { useNavigate } from "react-router-dom";
import { PreviewData } from "../types";
import "./../css/PreviewForm.scss";
interface PreviewFormProps {
  data: PreviewData[];
}

const PreviewForm = ({ data }: PreviewFormProps) => {
  const navigate = useNavigate();

  const goDetailPage = (it: PreviewData) => () => {
    navigate(`/detail-page/${it.id}`);
    sessionStorage.setItem("data", JSON.stringify(it));
  };
  return (
    <div className="PreviewForm">
      {data.map((it) => (
        <div key={it.id}>
          <div className="preview_wrapper" onClick={goDetailPage(it)}>
            <div className="top">
              <img src={process.env.PUBLIC_URL + `${it.thumbnail}`} />
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
