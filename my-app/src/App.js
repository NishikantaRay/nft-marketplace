import "./App.css";
import Navbar from "./components/Navbar.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Explore from "./components/Explore";
import { Route, Routes } from "react-router-dom";
import Resources from "./components/Resources";
import Create from "./components/Create";
function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<Explore />}></Route>
          <Route exact path="/resources" element={<Resources />} />
          <Route exact path="/create" element={<Create />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
