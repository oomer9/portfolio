import { render } from '@testing-library/react';
import React from 'react';
import {useEffect,useState} from 'react'
import classes from './aboutme.module.scss';
import OmerPic from '../svgs/omerPic.jpeg'
import Avatar from '@material-ui/core/Avatar';


const AboutMe =()=>{

    return(
        <div className=" justify-content-center ">
            <div className=" d-flex flex-row justify-content-center ">  
                <Avatar alt="Omer Pic" src={OmerPic} className={classes.avatar} />
            </div>
            <div className={" d-flex flex-row justify-content-center "}>
                <div className={classes.item}>
                    Software Engineer 
                </div>
            </div>
        </div>
    )

}
export default AboutMe;
