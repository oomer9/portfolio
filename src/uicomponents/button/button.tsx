import React from 'react';
import MaterialButton from '@material-ui/core/Button';
import './button.scss';

const Button: any = ({
label = null,
type= " primary ",
className="",
onClick = () => true
}) =>{
    const localClassName = ` ${type} ${className}`
    return(
        <div>
            <MaterialButton onClick={onClick} className={localClassName} >{label}</MaterialButton>
        </div>
    );
}
export default Button;