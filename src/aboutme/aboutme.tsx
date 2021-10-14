import React from "react";
import classes from "./aboutme.module.scss";
import OmerPic from "../svgs/omerPic.jpeg";
import Avatar from "@material-ui/core/Avatar";
import LinkedIn from "../svgs/linkedInLogo.svg";
import GithubLogog from "../svgs/githubIcon.svg";
import "../style/globalstyles.scss";

const AboutMe = () => {
  const linkedInLink = () => {
    window.open("https://www.linkedin.com/in/omerromer/", "_blank");
  };
  const githubLink = () => {
    window.open("https://github.com/oomer9", "_blank");
  };
  return (
    <div className={" justify-content-center mb-4 "}>
      <div className=" mdHeader d-flex flex-row justify-content-start mb-2 ">
        About Me
      </div>
      <div className=" d-flex flex-row justify-content-between ">
        <div>
          <div>
            {" "}
            Hello! I'm a software engineer with 2+ year of experience. I
            graduated from
          </div>
          <div>
            the
            <a
              className={classes.textLink}
              rel="noopener"
              href="https://www.cofc.edu/"
              target="_blank"
            >
              College of Charleston
            </a>{" "}
            with a bachelor's degree in computer science.
          </div>
          <div>
            I love a new challenge, and as a self-motivated person, I enjoy
            problem{" "}
          </div>
          <div>solving and learning new skills.</div>
          <div className=" my-1 ">
            Some technologies I've been working with recently
          </div>
        </div>
        <div>
          <div className=" d-flex flex-row justify-content-center ">
            <Avatar alt="Omer Pic" src={OmerPic} className={classes.avatar} />
          </div>
          <div className={" d-flex flex-row justify-content-center mb-2 "}>
            <img
              onClick={linkedInLink}
              src={LinkedIn}
              alt="LinkedIn Logo"
              className={classes.icon}
            />
            <img
              onClick={githubLink}
              src={GithubLogog}
              alt="Github Logo"
              className={classes.icon}
            />
          </div>
        </div>
      </div>

      <div className={" d-flex flex-row justify-content-center "}></div>
    </div>
  );
};
export default AboutMe;
