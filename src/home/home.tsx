import React, { useState } from "react";
import classes from "./home.module.scss";
import "../style/globalstyles.scss";
import "./home.scss";
import AboutMe from "../aboutme/aboutme";

const Home = () => {
  return (
    <div>
        <div className=
            " d-flex flex-column justify-content-center " ></div>
      <div className={classes.welcome}>
        <div
          className={
            " d-flex flex-row justify-content-center " + classes.welcomeText
          }
        >
          Omer Omer
        </div>
      </div>
      <div>
      <AboutMe /></div>
    </div>
  );
};

export default Home;
