import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Explore from "./components/Explore/Explore";
import Search from "./components/Search/Search";
import DetailedCard from "./components/DetailedCard/DetailedCard";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="content_container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Intro />
                  <Explore />
                </>
              }
            />
            <Route path="/search" element={<Search />} />
            <Route path="/details" element={<DetailedCard />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
