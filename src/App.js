import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/nav/Navbar";
import HomePage from "./components/home-page/HomePage";
import { Resume } from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Links from "./components/links/Links";

export const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar /> 
        <Routes>

          <Route path="" element={<HomePage />}></Route>

          <Route path="about_me" element={<HomePage />}></Route>

          <Route path="resume" element={<Resume />}></Route>

          <Route path="portfolio" element={<Portfolio />}></Route>

          <Route path="links" element={<Links />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
};
