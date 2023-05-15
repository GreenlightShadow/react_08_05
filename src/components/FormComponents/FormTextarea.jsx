import React from "react";
import FormBaseComponent from "./FormBaseComponent";

class FormTextarea extends FormBaseComponent {

    constructor(props){
        super(props)
        this.state = {
            counter : 0,
            error : ''
        }

        this.inputHandler = this.inputHandler.bind(this)
        this.validatorHandler = this.validatorHandler.bind(this)
    }



    limit = 600

    validationError = `${this.props.label}  should not be longer than ${this.limit} characters`
    requiredError = `${this.props.label}  should not be empty`

    inputHandler(e){
        let val = e.target.value
        this.setState({counter : val.length})
        this.props.onChange(this.props.name, val)
    }

    validatorHandler(e){
        let value = e.target.value

        if (value.length === 0) {
            this.setState({error: this.requiredError})
        } else if (value.length === this.limit) {
            this.setState({error : this.validationError})
        } else {
            this.setState({error: ''})
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
                    onFocus={() => this.setState({error: ''})}
                    style={{resize: 'none'}}
                    value={this.props.value}>

                </textarea>
                <div className="row">
                    <p className="info">{"Characters remaining: " + (600 - this.state.counter)}</p>
                    <p className="error">{this.state.error}</p>
                </div>
            </div>
        );
    }


}

export default FormTextarea;
