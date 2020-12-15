import React from 'react';
import blackHole from '../svgs/blackHole.svg';
import {Link} from "react-router-dom";
import HomeMenu from '../uicomponents/menu/menu';
import classes from './header.module.scss'

const Header = ()=>{
    return(
        <div className={classes.headerAnimations}>
            <div className=" d-flex flex-row  align-items-center justify-content-center ">
                <div>
                    <img className={classes.headerIconLeft} src={blackHole}/>
                    <Link to="/portfolio"><span className={classes.header}>Omer Omer</span></Link>
                    <img className={classes.headerIcon}  src={blackHole}/>
                </div>
            </div>
            <div className={classes.headerLine}/>
        </div>

    )
}
export default Header;