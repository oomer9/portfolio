import React from 'react';
import classes from  './home.module.scss';
import '../style/globalstyles.scss';
import './home.scss'
import Button from '../uicomponents/button/button';
import blackHole from '../svgs/blackHole.svg';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import HomeMenu from '../uicomponents/menu/menu';
import AboutMe from '../aboutme/aboutme';
import Header from '../header/header';
  
class Home extends React.Component{

    constructor(props: any) {
        super(props);
        this.state ={
            
        }
      }
    
    render(){
    return(
        <div className=" d-flex ">
            <div className={classes.fixed}>
                <Header/>
            </div>
            <div className={classes.content}> 
                <Route  path="/about" component={AboutMe}/>
            </div>
        </div>
    )};
}

export default Home;

