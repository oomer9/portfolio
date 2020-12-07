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
                <Route  path="/about" exact component={AboutMe}/>
                <Route  path="/data" exact component={DataRendering}/>
            </div>
                
        </div>
    )
}

export default Home;

