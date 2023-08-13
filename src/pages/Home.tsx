import "./../css/Home.scss";
import SearchBar from "../components/SearchBar";
import Category from "../components/Category";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <main>
        <div className="banner">
          <img src={process.env.PUBLIC_URL + `assets/banner.svg`} />
        </div>
        <SearchBar />
        <Category />
      </main>
    </div>
  );
};

export default Home;
