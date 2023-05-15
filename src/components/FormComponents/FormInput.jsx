import React from "react";
import FormBaseComponent from "./FormBaseComponent";

class FormInput extends FormBaseComponent{

    constructor(props) {
        super(props);

        this.state = {
            error: '',
            value: ''
        }

        this.validatorHandler = this.validatorHandler.bind(this)
        this.phoneHandler = this.phoneHandler.bind(this)
        this.formatPhoneNumber = this.formatPhoneNumber.bind(this)
    }

    validationError = `${this.props.label} is invalid`
    requiredError = `${this.props.label}  should not be empty`

    validatorHandler(e){
        let value = e.target.value

        if (value === '') {
            this.setState({error: this.requiredError})
        } else if (!new RegExp(this.props.regex, 'gm').test(value)) {
            this.setState({error: this.validationError})
        } else {
            this.setState({error: ''})
        }
    }

    phoneHandler(e){
        if (this.props.name !== 'phone') {
            return;
        }
        this.setState({value: this.formatPhoneNumber(e.target.value)})
    }

    formatPhoneNumber(val){
        if (!val) {
            return val
        }

        const phoneNumber = val.replace(/[^\d]/g, '')

        if (isNaN(phoneNumber)) {
            return val.slice(-1)
        }

        const phoneNumberLength = phoneNumber.length

        //7-7777-77-77
        if (phoneNumberLength <= 1) {
            //7
            return phoneNumber
        }
        if (phoneNumberLength <= 5) {
            //7-7777
            return `${phoneNumber.slice(0, 1)}-${phoneNumber.slice(1)}`
        }
        if (phoneNumberLength <= 7) {
            //7-7777-77
            return `${phoneNumber.slice(0, 1)}-${phoneNumber.slice(1, 5)}-${phoneNumber.slice(5)}`
        }
        //7-7777-77-77
        return `${phoneNumber.slice(0, 1)}-${phoneNumber.slice(1, 5)}-${phoneNumber.slice(5, 7)}-${phoneNumber.slice(7, 9)}`

    }
    render() {
        return (
            <div className="form-container">
               <label className="col-form-label">
                   {this.props.label}
               </label>
               <input type={this.props.type ?? 'text'}
                      className="form-control"
                      name={this.props.name}
                      onBlur={this.validatorHandler}
                      onChange={this.phoneHandler}
                      onFocus={() => this.setState({error: ''})}
                      value={this.props.name === 'phone' ? this.state.value : undefined}
                      placeholder={this.props.placeholder}
                      required={true}
               />
               <p className="error">{this.state.error}</p>
            </div>
        )
    }


}


export default FormInput;
