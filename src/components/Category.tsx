import {
  AiOutlineStar,
  AiOutlineHome,
  AiOutlineRise,
  AiOutlineBank,
  AiOutlineWallet,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import "./../css/Category.scss";
const Category = () => {
  return (
    <div className="Category">
      <ul>
        <li>
          <AiOutlineStar className="icon" />
          재테크
        </li>
        <li>
          <AiOutlineHome className="icon" />
          주거
        </li>
        <li>
          <AiOutlineWallet className="icon" />
          소비지출
        </li>
        <li>
          <AiOutlineCheckCircle className="icon" />
          신용관리
        </li>
        <li>
          <AiOutlineRise className="icon" />
          재무설계
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
