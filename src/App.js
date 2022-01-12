import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Explore from "./components/Explore/Explore";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content_container">
        <BrowserRouter>
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
          </Routes>
        </BrowserRouter>
      </div>
      <a href="https://www.freepik.com/vectors/school">
        School vector created by pch.vector - www.freepik.com
      </a>
      <a href="https://www.freepik.com/vectors/business">
        Business vector created by pch.vector - www.freepik.com
      </a>
    </div>
  );
}

export default App;
