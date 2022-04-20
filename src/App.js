// router dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// style
import "./App.css";
// component
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" to="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
