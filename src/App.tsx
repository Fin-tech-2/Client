import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginTab from "./pages/login/LoginTab";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className="app-content">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<LoginTab/>}/>
                </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
