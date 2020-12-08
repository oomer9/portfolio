import React from 'react'
import MUDialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import classes from './dialog.module.scss';
import {BrowserRouter as Router,Link} from "react-router-dom";
import { title } from 'process';

const Dialog: any = ({
className=" ",
isOpen=false,
children=null,
header = "Add Dialog Header",
onClose=()=>true,
})=>{
   

    return(
        <MUDialog open={isOpen} className={className} onClose={onClose} >
            <DialogTitle >{header}</DialogTitle>
            <div className={classes.content} >
                {children}
            </div>
            
        </MUDialog>

    )
}
export default Dialog;  