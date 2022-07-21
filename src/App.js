import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/nav/Navbar";
import HomePage from "./components/home-page/HomePage";
import { Resume } from "./components/resume/Resume";

export const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar /> 
        <Routes>

          <Route path="" element={<HomePage />}></Route>

          <Route path="about_me" element={<HomePage />}></Route>

          <Route path="resume" element={<Resume />}></Route>

          <Route path="portfolio" element={<Resume />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
};
