import React from 'react';
import blackHole from '../svgs/blackHole.svg';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import HomeMenu from '../uicomponents/menu/menu';
import classes from './header.module.scss'

const Header = ()=>{
    const menuOptions=[{label:"About",route:"/about"},{label:"Graphs with React",route:"/graphs"}];
    return(
        <div>
            <div className=" d-flex flex-row  align-items-center justify-content-between ">
                <div/>
                <div>
                    <img className={classes.headerIconLeft} src={blackHole}/>
                    <Link to="/"><span className={classes.header}>Omer Omer</span></Link>
                    <img className={classes.headerIcon}  src={blackHole}/>
                </div>
                <div className=" mb-4 mr-4 ">
                    <HomeMenu menuOptions={menuOptions} />
                </div>
            </div>
            <div className={classes.headerLine}/>
        </div>

    )
}
export default Header;