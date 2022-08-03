import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import UploadFile from "./components/UploadFile";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import { useContext } from "react";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<UploadFile />} path="upload" />
          <Route element={<Home />} path="home" />
          
          <Route element={<Dashboard />} path="dashboard" />
          <Route element={<Login />} path="loginpage" />
          <Route element={<Signup />} path="signuppage" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
