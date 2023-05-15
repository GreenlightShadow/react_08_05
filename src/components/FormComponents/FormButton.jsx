import React from "react";
import FormBaseComponent from "./FormBaseComponent";

class FormButton extends FormBaseComponent {
    constructor(props) {
        super(props);

        this.handleReset = this.handleReset.bind(this)
    }

    handleReset () {
        this.props.onClick()
        let errors = document.querySelectorAll('.error');
        let infos = document.querySelectorAll('.info');

        errors.forEach(error => {
            error.innerHTML = ''
        })

        infos.forEach(info => {
            info.innerHTML = "Characters remaining: " + 600
        })
    }

    render() {
        return (
            <input type="button" value="Cancel"
                   onClick={this.handleReset}
                   className="btn btn-danger"/>
        );
    }
}

export default FormButton;
