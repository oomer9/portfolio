import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react'
import MenuIcon from '../../svgs/menu.svg'
import './menu.scss';   
import classes from './menu.module.scss';
import {BrowserRouter as Router,Link} from "react-router-dom";

const HomeMenu: any = ({
className=" ",
menuOptions=[{label:"",route:""}],
})=>{
    const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);
    const handleClick = (event: any) => {
        setAnchor(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchor(null);
      };

    return(
        <div className={className}>
            <div onClick={(e)=>{handleClick(e)}}><img className={classes.icon} src={MenuIcon} /></div>  
            <Menu
            id="simple-menu"
            anchorEl={anchor}
            keepMounted
            open={Boolean(anchor)}
            onClose={handleClose}
             >
                {menuOptions && menuOptions.map((item,key)=>{
                  return(
                    <Link key={key} to={item.route}>
                      <MenuItem onClick={handleClose}>{item.label}</MenuItem>
                    </Link>
                  )  
                })}
            </Menu>
        </div>
    )
}
export default HomeMenu