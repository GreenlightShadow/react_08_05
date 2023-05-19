import React from "react";
import './form.css'

const  FormButton = (props) => {
    return (
        <input type="button" value="Cancel"
               onClick={props.onClick}
               className="btn btn-danger"/>
    )
}

export default FormButton;
