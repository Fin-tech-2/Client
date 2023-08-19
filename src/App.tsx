import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateFunding from "./pages/CreateFunding";
import Footer from "./components/Footer";
import LoginTab from "./pages/login/LoginTab";
import SearchId from "./pages/login/SearchId";
import SearchPw from "./pages/login/SearchPw";
import DetailPage from "./pages/DetailPage";
import MyPage from "./pages/MyPage/MyPage";
import PaymentPage from "./pages/PaymentPage";
import InterestTab from "./pages/MyPage/InterestTab";
import MyLectureTab from "./pages/MyPage/MyLectureTab";
import PurchaseDetailTab from "./pages/MyPage/PurchaseDetailTab";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginTab />} />
            <Route path="/create-punding" element={<CreateFunding />} />
            <Route path="/detail-page/:id" element={<DetailPage />} />
            <Route path="/payment/:id" element={<PaymentPage />} />

            <Route path="/my-page" element={<MyPage />}>
              {/*<Route path="interest" element={<InterestTab />} />*/}
              {/*<Route path="my-lecture" element={<MyLectureTab />} />*/}
              {/*<Route path="purchase-detail" element={<PurchaseDetailTab />} />*/}
            </Route>

            <Route path="/searchId" element={<SearchId />} />
            <Route path="/searchPw" element={<SearchPw />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
