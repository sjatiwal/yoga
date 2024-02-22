import "./App.css";
import Header from "./components/header";
import Explore from "./views/explore";
import Home from "./views/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App bg-[#FCF9F1] min-h-screen px-[50px] relative">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/explore" element={<Explore />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
