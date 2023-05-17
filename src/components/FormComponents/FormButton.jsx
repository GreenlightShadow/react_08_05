import React from "react";
import FormBaseComponent from "./FormBaseComponent";

class FormButton extends FormBaseComponent {

    render() {
        return (
            <input type="button" value="Cancel"
                   onClick={this.props.onClick}
                   className="btn btn-danger"/>
        );
    }
}

export default FormButton;
