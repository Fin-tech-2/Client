import { useEffect, useState } from "react";
import "./../css/Header.scss";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const goLoginPage = () => {
    navigate("/login");
  };

  useEffect(() => {
    const name = sessionStorage.getItem("name");
    if (name != null) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  });

  const logOutHandeler = () => {
    alert("로그아웃 되었습니다.");
    sessionStorage.clear();
    setIsLogin(false);
    navigate("/", { replace: true });
  };

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
            src={process.env.PUBLIC_URL + `/assets/Logo.svg`}
            alt="로고이미지"
          />
        </div>

        <div className="name">시금치</div>
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
              <li onClick={logOutHandeler}>로그아웃</li>
            </ul>
          </>
        ) : (
          <>
            <ul>
              <li onClick={goLoginPage}>로그인/회원가입</li>
            </ul>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
