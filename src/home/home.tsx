import React, { Component } from 'react';
import classes from  './home.module.scss';
import '../style/globalstyles.scss';
import './home.scss'
import Button from '../uicomponents/button/button';
import blackHole from '../svgs/blackHole.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
class Home extends Component{

    render(){
    return(
        <div className={classes.home}>
            <Router>
            <div className=" d-flex flex-row justify-content-center">
                <img className={classes.flourishleft} src={blackHole} />  
                <Link to="/"><div className={classes.header}>Omer Omer</div></Link>
                <img className={classes.flourishIcon} src={blackHole} />            
            </div>
            
                <div className={` d-flex flex-row justify-content-center align-items-center ${classes.navBar}`}>
                    <Link to="/about"><Button className=" mr-2" label="About Me" /></Link>
                    <Link to="/graphs"><Button label="Graphs with React" /></Link>
                </div>
                <Switch>
                    <Route  exact path="/">
                        <div className="  d-flex flex-row justify-content-center ">
                        </div>
                    </Route>
                </Switch>
            </Router>
        </div>
    )};
}

export default Home;

