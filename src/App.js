import React from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom"; // 使用 Routes 和 Route
import HomePage from "./HomePage"; // 確保有這個組件
import AboutPage from "./AboutPage"; // 確保有這個組件
import MyComponent from "./MyComponent";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        {/* 設置導航鏈接 */}
        <nav>
          <Link to="/about"class="email">EnterEmail</Link> <Link to="/" class="game">GassWordGame</Link>  <Link to="/Home"class="email">GassNumber</Link> 
        </nav>

        {/* 路由設定 */}
        <Routes>
          {/* 使用 element prop 渲染組件 */}
          <Route path="/" element={<MyComponent />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/Home" element={<HomePage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

