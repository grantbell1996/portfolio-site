import React from "react";
import { Link } from "react-router-dom";
import ".//Portfolio.css";
import todoBG from "../images/todo_bg.png"

function Portfolio() {
  return (
    <>
      <div className="portfolio_cont">
        <div className="portfolio_body">
          <div className="portfolio_link" href="https://todo-app-cp-71164.web.app">
            <img className="app_bg" src={todoBG}/>
          </div>
          <div className="portfolio_desc">
            A simple todo app built using React. I built this as a small project to familiarize 
            myself with firebase. 
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
