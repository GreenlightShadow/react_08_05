import React from "react";
import FormBaseComponent from "./FormBaseComponent";

class FormSubmit extends FormBaseComponent{

    render() {
        return (
            <input type="submit" value="Submit"
                   className="btn btn-warning btn-outline-dark"
            />
        );
    }
}


export default FormSubmit;
