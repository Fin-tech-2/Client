import { useState } from "react";
import "./../css/Header.scss";
const Header = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <header className="Header">
      <div className="content">
        <div className="logo">
          <img
            src={process.env.PUBLIC_URL + `assets/Logo.svg`}
            alt="로고이미지"
          />
        </div>

        <div className="name">
          <div className="name_top">
            <p className="highlight">시</p>
            <p>니어들의</p>
          </div>
          <div className="name_bottom">
            <p className="highlight">금</p>
            <p>융 스피</p>
            <p className="highlight">치</p>
          </div>
        </div>
      </div>

      <nav className="navigation">
        {isLogin ? (
          <>
            <ul>
              <li>펀딩등록</li>
              <li>마이페이지</li>
              <li>로그아웃</li>
            </ul>
          </>
        ) : (
          <>
            <ul>
              <li>로그인/회원가입</li>
            </ul>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
