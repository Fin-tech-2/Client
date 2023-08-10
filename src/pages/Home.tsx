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
      price: "123123",
      dday: "D-2",
      title: "부동산 천재의 어쩌구 저쩌구",
      thumbnail: "/assets/dummyimg.svg",
    },
    {
      id: 2,
      percentage: "98",
      price: "123123",
      dday: "D-12",
      title: "부동산 천재의 금나와라 뚝딱",
      thumbnail: "/assets/dummyimg.svg",
    },
    {
      id: 3,
      percentage: "111",
      price: "123123",
      dday: "D-7",
      title: "부동산 성공시키기!",
      thumbnail: "/assets/dummyimg.svg",
    },
    {
      id: 4,
      percentage: "98",
      price: "123123",
      dday: "D-2",
      title: "부동산 천재의 어쩌구 저쩌구",
      thumbnail: "/assets/dummyimg.svg",
    },
    {
      id: 5,
      percentage: "98",
      price: "123123",
      dday: "D-12",
      title: "부동산 천재의 금나와라 뚝딱",
      thumbnail: "/assets/dummyimg.svg",
    },
    {
      id: 6,
      percentage: "111",
      price: "123123",
      dday: "D-7",
      title: "부동산 성공시키기!",
      thumbnail: "/assets/dummyimg.svg",
    },
  ];

  return (
    <div className="Home">
      <Header />
      <main>
        <div className="banner">
          <img src={process.env.PUBLIC_URL + `assets/banner.svg`} />
        </div>
        <SearchBar />
        <Category />
        <PreviewForm data={dummyData} />
      </main>
    </div>
  );
};

export default Home;
