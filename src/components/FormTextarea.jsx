import React from "react";
import FormBaseComponent from "./FormBaseComponent";

class FormTextarea extends FormBaseComponent {

    render() {
        return (
            <div className="row">
                <div className="col-md-12 form-group mb-3">
                    <label className="col-form-label">
                        {this.camelcaseToText(this.props.field)}
                    </label>
                    <textarea className="form-control"
                              name={this.props.field}
                              cols="30"
                              rows="7"
                              placeholder={'Your ' + this.camelcaseToText(this.props.field)}
                              style={{resize: 'none'}}>
                    </textarea>
                </div>
            </div>
        );
    }
}


export default FormTextarea;
