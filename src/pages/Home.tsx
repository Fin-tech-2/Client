import "./../css/Home.scss";
import SearchBar from "../components/SearchBar";
import PreviewForm from "../components/PreviewForm";
import { PreviewData } from "../types";
import Category from "../components/Category";
import Header from "../components/Header";

const Home = () => {
  const dummyData: PreviewData[] = [
    {
      id: 1,
      percentage: "98",
      price: "123,123",
      dday: "D-2",
      title: "부동산 천재의 어쩌구 저쩌구",
    },
    {
      id: 2,
      percentage: "98",
      price: "123,123",
      dday: "D-12",
      title: "부동산 천재의 금나와라 뚝딱",
    },
    {
      id: 3,
      percentage: "111",
      price: "123,123",
      dday: "D-7",
      title: "부동산 성공시키기!",
    },
    {
      id: 4,
      percentage: "98",
      price: "123,123",
      dday: "D-2",
      title: "부동산 천재의 어쩌구 저쩌구",
    },
    {
      id: 5,
      percentage: "98",
      price: "123,123",
      dday: "D-12",
      title: "부동산 천재의 금나와라 뚝딱",
    },
    {
      id: 6,
      percentage: "111",
      price: "123,123",
      dday: "D-7",
      title: "부동산 성공시키기!",
    },
  ];

  return (

    <div className="Home">
      <Header/>
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
        <SearchBar />
        <Category />
        <PreviewForm data={dummyData} />
      </main>
    </div>
  );
};

export default Home;
