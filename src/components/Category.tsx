import {
  AiOutlineStar,
  AiOutlineHome,
  AiOutlineRise,
  AiOutlineBank,
} from "react-icons/ai";
import "./../css/Category.scss";
const Category = () => {
  return (
    <div className="Category">
      <ul>
        <li>
          <AiOutlineStar className="icon" />
          펀드
        </li>
        <li>
          <AiOutlineHome className="icon" />
          부동산
        </li>
        <li>
          <AiOutlineRise className="icon" />
          주식
        </li>
        <li>
          <AiOutlineBank className="icon" />
          금융권 취업
        </li>
      </ul>
    </div>
  );
};

export default Category;
