import { BsSearch } from "react-icons/bs";
import "./../css/SearchBar.scss";
const SearchBar = () => {
  return (
    <div className="SearchBar">
      <div className="bar">
        <BsSearch className="icon" />
        <input placeholder="검색어를 입력하세요"></input>
      </div>
    </div>
  );
};

export default SearchBar;
