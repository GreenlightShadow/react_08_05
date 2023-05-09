import React from "react";
import FormBaseComponent from "./FormBaseComponent";

class FormSubmit extends FormBaseComponent {

    render() {
        return (
            <input type="button" value="Save"
                   className="btn rounded-0 m-1 py-2 px-4 btn-warning btn-outline-dark"/>
        );
    }
}


export default FormSubmit;
