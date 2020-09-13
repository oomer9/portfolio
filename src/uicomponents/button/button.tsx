import React from 'react';
import MaterialButton from '@material-ui/core/Button';
import './button.scss';

const Button: any = ({
label = null,
type= " primary ",
onClick = () => true
}) =>{
    const className = type

    return(
        <div>
            <MaterialButton onClick={onClick} className={className} variant="contained">{label}</MaterialButton>
        </div>
    );
}
export default Button;