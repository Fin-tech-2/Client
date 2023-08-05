import { useState } from "react";
import "./../css/Header.scss";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const goLoginPage = () => {
        navigate('./login');
    }

  return (
    <header className="Header">
      <div
        className="content"
        onClick={() => {
          navigate("/");
        }}
      >
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
              <li
                onClick={() => {
                  navigate("/create-punding");
                }}
              >
                펀딩등록
              </li>
              <li>마이페이지</li>
                <li onClick={goLoginPage} >로그인/회원가입</li> {/*백엔드 구현 전 개발 편의성 위함*/}
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
