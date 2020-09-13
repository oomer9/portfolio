import React, { Component } from 'react';
import './home.scss';
import '../style/globalstyles.scss';
import Button from '../uicomponents/button/button';


class Home extends Component{

    render(){
    return(
        <div className="home">
            <div className=" d-flex flex-row justify-content-center">
                <div className="header">---- Omer Omer ----</div>
            </div>
        </div>
    )};
}

export default Home;