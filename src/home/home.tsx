import React, { useState } from 'react';
import classes from  './home.module.scss';
import '../style/globalstyles.scss';
import './home.scss'
import { Route } from "react-router-dom";
import AboutMe from '../aboutme/aboutme';
import Header from '../header/header';
import DataRendering from '../datarendering/datarendering';

const Home = ()=> {

    return(
        <div className=" d-flex ">
            <div className={classes.fixed}>
                <Header/>
            </div>
           
            <div className={classes.content}> 
                <div className={classes.welcome}>
                    <div  className={" d-flex flex-row justify-content-center "+ classes.welcomeText}>
                        Welcome To My Portfolio 
                    </div>
                </div>
                <AboutMe/>
                <DataRendering/>
            </div>
                
        </div>
    )
}

export default Home;

