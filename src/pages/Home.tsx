import "./../css/Home.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="Home">
      <Header />
      <main>
        <div className="banner">
          <div className="top"></div>
          <div className="center">
            <div className="content">
              <div className="content_line">
                <p className="highlight">시</p>
                <p>니어들의</p>
              </div>
              <div className="content_line">
                <p className="highlight">금</p>
                <p>융</p>
              </div>
              <div className="content_line">
                <p>스피</p>
                <p className="highlight">치</p>
              </div>
              <hr />
            </div>
            <img src={process.env.PUBLIC_URL + `assets/banner2.svg`} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
