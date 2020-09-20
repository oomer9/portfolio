import React, { Component } from 'react';
import classes from  './home.module.scss';
import '../style/globalstyles.scss';
import './home.scss'
import Button from '../uicomponents/button/button';
import blackHole from '../svgs/blackHole.svg';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import HomeMenu from '../uicomponents/menu/menu';
  
class Home extends Component{

    
    render(){
        const menuOptions=[{label:"About",route:"/about"},{label:"Graphs with React",route:"/graphs"}];
    return(
        <div className={classes.home}>
            <Router>
                <div className={classes.top}>
                    <div className={" d-flex flex-row justify-content-between align-items-center "}>
                        <div></div>
                        <div >
                            <img className={classes.headerIconLeft} src={blackHole}/>
                            <Link to="/"><span className={classes.header}>Omer Omer</span></Link>
                            <img className={classes.headerIcon}  src={blackHole}/>
                        </div>
                        <div className=" mb-3 " ><HomeMenu menuOptions={menuOptions} />  </div>
                    </div>
                    <div className={classes.headerLine}></div>
                </div>
            <Switch>
                    <div className={classes.content}>
                        <Route  exact path="/">
                            <div >
                            </div>
                        </Route>
                    </div>
                </Switch>
            </Router>
        </div>
    )};
}

export default Home;

