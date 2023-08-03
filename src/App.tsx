import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateFunding from "./pages/CreateFunding";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-punding" element={<CreateFunding />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
