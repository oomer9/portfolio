import React, { Component } from 'react';
import classes from  './home.module.scss';
import '../style/globalstyles.scss';
import './home.scss'
import Button from '../uicomponents/button/button';
import blackHole from '../svgs/blackHole.svg';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import HomeMenu from '../uicomponents/menu/menu';
import AboutMe from '../aboutme/aboutme';
import Header from '../header/header';
  
class Home extends Component{

    
    render(){
    return(
        <div>
            <Router>
                <div>
                    <Header/>
                </div>
                <div className={classes.content}>
                    <Route  path="/">
                        <div >
                        </div>
                    </Route>
                    <Route  path="/about">
                        <div>
                            <AboutMe/>
                        </div>
                    </Route>
                </div>
                </Router>
        </div>
    )};
}

export default Home;

