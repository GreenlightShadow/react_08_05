import React from "react";
import FormBaseComponent from "./FormBaseComponent";

class FormButton extends FormBaseComponent {
    handleReset () {
        let inputs = document.querySelectorAll('input');
        let textAreas = document.querySelectorAll('textarea');
        let errors = document.querySelectorAll('.error');
        let infos = document.querySelectorAll('.info');
        inputs.forEach(input => {
            if(input.type !== 'button') {
                input.value = ""
            }
        })

        textAreas.forEach(textarea => {
            textarea.value = ''
        })

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
