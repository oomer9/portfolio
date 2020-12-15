import React from 'react';
import classes from './aboutme.module.scss';
import OmerPic from '../svgs/omerPic.jpeg'
import Avatar from '@material-ui/core/Avatar';
import LinkedIn from '../svgs/linkedInLogo.svg';
import GithubLogog from '../svgs/githubIcon.svg';
import '../style/globalstyles.scss'

const AboutMe =()=>{

    const linkedInLink = ()=>{
        window.open("https://www.linkedin.com/in/omerromer/", '_blank');
    }
    const githubLink = ()=>{
        window.open("https://github.com/oomer9", '_blank');
    }
    return(
        <div className={" justify-content-center "}>
            <div className=" sectionHeader d-flex flex-row justify-content-start mb-2 ">
                About Me
            </div>
            <div className=" d-flex flex-row justify-content-center ">  
                <Avatar alt="Omer Pic" src={OmerPic} className={classes.avatar} />
            </div>
            <div className={" d-flex flex-row justify-content-center mb-2 "}>
                <div className={classes.item}>
                    Software Engineer 
                </div>
                <img onClick={linkedInLink} src={LinkedIn} alt="LinkedIn Logo" className={classes.icon}/>
                <img onClick={githubLink} src={GithubLogog} alt="Github Logo" className={classes.icon}/>
            </div>
            <div className={" d-flex flex-row justify-content-center "}>
                
            </div>
        </div>
    )

}
export default AboutMe;
