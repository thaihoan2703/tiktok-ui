import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./Page/Home";
import MotorPage from "./Page/Motor";
import ContactPage from "./Page/Contact";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/motor">Motor</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/motor" element={<MotorPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
