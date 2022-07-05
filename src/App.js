
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Login from "./Components/Login";
import Preview from "./Components/Preview";
import Register from "./Components/Register";

import Header from "./Components/Header";

import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";



function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const mytheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#133c68",
      },
    },
  });

  const mytheme2 = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#133c68",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={darkTheme ? mytheme2 : mytheme}>
        <BrowserRouter>
        <Header
            username={"Abhinav Tiwari"}
            darkTheme={darkTheme}
            setDarkTheme={setDarkTheme}
          ></Header>
         
          <Routes>
            <Route element={<Login />} path="loginpage" />
            <Route element={<Preview />} path="previewpage" />
            <Route element={<Register />} path="registerpage" />
          
          </Routes>
         
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
