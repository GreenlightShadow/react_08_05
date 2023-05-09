import React from "react";
import FormBaseComponent from "./FormBaseComponent";

class FormButton extends FormBaseComponent {

    render() {
        return (
            <input type="button" value="Cancel"
                   className="btn rounded-0 m-1 py-2 px-4 btn-danger"/>
        );
    }
}


export default FormButton;
