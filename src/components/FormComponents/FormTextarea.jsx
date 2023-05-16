import React from "react";
import FormBaseComponent from "./FormBaseComponent";

class FormTextarea extends FormBaseComponent {

    constructor(props){
        super(props)
        this.state = {
            counter : 0,
            isFocus : false
        }

        this.inputHandler = this.inputHandler.bind(this)
        this.validatorHandler = this.validatorHandler.bind(this)
    }

    limit = 600
    textError = `${this.props.label}  should not be longer than ${this.limit} characters or empty`

    inputHandler(e){
        let val = e.target.value
        this.setState({counter : val.length})
        this.props.onChange(this.props.name, val)
    }

    validatorHandler(e){
        this.setState({isFocus: false})
        let value = e.target.value

        if (value.length === 0 || value.length >= this.limit) {
            this.props.setError(this.props.name, true)
        } else {
            this.props.setError(this.props.name, false)
        }
    }

    render() {
        return (
            <div className="form-container">
                <label className="col-form-label">
                    {this.props.label}
                </label>
                <textarea className="form-control"
                    cols="30"
                    rows="7"
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    onChange={this.inputHandler}
                    onBlur={this.validatorHandler}
                    onFocus={() => {
                        this.setState({isFocus: true})
                        this.props.setVisited(this.props.name, true)
                    }}
                    style={{resize: 'none'}}
                    >

                </textarea>
                <div className="row form-textarea">
                    <p className="info">{"Characters remaining: " + (600 - this.state.counter)}</p>
                    <p className="error">{
                        this.props.getError(this.props.name) && (this.props.getVisited(this.props.name) || this.props.submitted) && !this.state.isFocus ? this.textError : ""
                    }
                    </p>
                </div>
            </div>
        );
    }


}

export default FormTextarea;
