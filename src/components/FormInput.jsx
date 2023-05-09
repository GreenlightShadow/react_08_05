import React from "react";
import FormBaseComponent from "./FormBaseComponent";

class FormInput extends FormBaseComponent {

    render() {
        return (
            <div className="row">
                <div className="col-md-12 form-group mb-3">
                    <label className="col-form-label">
                        {this.camelcaseToText(this.props.field)}
                    </label>
                    <input type={this.props.type ?? 'text'}
                           className="form-control"
                           name={this.props.field}
                           placeholder={'Your ' + this.camelcaseToText(this.props.field)} />
                </div>
            </div>
        );
    }
}


export default FormInput;
