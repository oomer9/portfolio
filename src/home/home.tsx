import React, { Component } from 'react';
import classes from  './home.module.scss';
import '../style/globalstyles.scss';
import Button from '../uicomponents/button/button';
import blackHole from '../svgs/blackHole.svg';

class Home extends Component{

    render(){
    return(
        <div className={classes.home}>
            <div className=" d-flex flex-row justify-content-center">
                <img className={classes.flourishleft} src={blackHole} />  
                <div className={classes.header}>Omer Omer</div>
                <img className={classes.flourishIcon} src={blackHole} />            
            </div>
            <div className={` d-flex flex-row justify-content-center align-items-center ${classes.navBar}`}>
                <Button className=" mr-2" label="About Me" />
                <Button label="Graphs with React" />
            </div>
        </div>
    )};
}

export default Home;

