import React from "react";
import profile from "../images/profileratio.png";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <div className="container">
        <div className="container_element">
          <img className="profile" src={profile}></img>
        </div>
        <div className="container_element">
          <div className="container_text">
            <div className="top_elements">
              <div className="title">Software Developer</div>
              <div className="name">Grant Bell</div>
              <ul className="languages">
                <li className="li">React</li>
                <li className="li">Python</li>
                <li className="li">Django</li>
                <li className="li">JavaScript</li>
                <li className="li">CSS</li>
                <li className="li">SQL</li>
              </ul>
              <div className="links">
                <a
                  className="link_item"
                  href="https://github.com/grantbell1996"
                >
                  Github
                </a>
                <a
                  className="link_item"
                  href="https://www.linkedin.com/in/grant-bell1996/"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="bio">
              I was born and raised in Nashville, Tennessee. After working
              several construction and manual labor jobs for about seven years I
              decided I wanted to consider a career that provided more room for
              growth and an opportunity to challenge myself in a different way.
              I was recommended from several friends working in the field to
              look into software development, and found the algorithmic problem
              solving to be rewarding and exciting. Since graduating from
              Nashville Software School in June of 2022 I've enjoyed developing
              new relationships in the wild world of coding and building new
              projects ever since.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
