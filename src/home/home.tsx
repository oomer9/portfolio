import React from 'react';
import classes from  './home.module.scss';
import '../style/globalstyles.scss';
import './home.scss'
import { Route } from "react-router-dom";
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
                <Route  path="/about" exact component={AboutMe}/>
            </div>
        </div>
    )};
}

export default Home;

