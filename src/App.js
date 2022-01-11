import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Explore from "./components/Explore/Explore";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="content_container">
                <Intro />
                <Explore />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
      <a href="https://www.freepik.com/vectors/school">
        School vector created by pch.vector - www.freepik.com
      </a>
    </div>
  );
}

export default App;
