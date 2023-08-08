import "./../css/Footer.scss";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="content">
        <p className="top">시금치는 시니어들의 도전을 지원합니다.</p>
        <p className="bottom">지금부터 인생 제 2막을 펼쳐보세요.</p>
        <div className="logo">
          <img
            src={process.env.PUBLIC_URL + `assets/footerLogo.svg`}
            alt="푸터로고이미지"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
