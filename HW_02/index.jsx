import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import LoginForm01 from "./Task01_Login/loginForm01";
import TiketsClass from "./Task02_TiketsClass/TiketsClass";
import EnglishTrein from "./Task03_EnglishTrein/EnglishTrein";

function Menu() {
  return (
    <div style={styles.menu}>
      <h1>HW_2</h1>

      <Link to="/task1">Завдання 1</Link>
      <Link to="/task2">Завдання 2</Link>
      <Link to="/task3">Завдання 3</Link>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/task1" element={<LoginForm01 />} />
        <Route path="/task2" element={<TiketsClass />} />
        <Route path="/task3" element={<EnglishTrein />} />
      </Routes>
    </BrowserRouter>
  );
}

const styles = {
  menu: {
    fontFamily: "Arial",
    backgroundColor: "#fff",
    padding: "20px",
    maxWidth: "320px",
    margin: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  }
};