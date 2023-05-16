import React from "react";
import FormBaseComponent from "./FormBaseComponent";

class FormInput extends FormBaseComponent{

    constructor(props) {
        super(props);

        this.state = {
            isFocus: false,
            value: ''
        }

        this.validatorHandler = this.validatorHandler.bind(this)
        this.phoneHandler = this.phoneHandler.bind(this)
        this.formatPhoneNumber = this.formatPhoneNumber.bind(this)
    }

    textError = `${this.props.label} is invalid`

    validatorHandler(e){
        this.setState({isFocus: false})
        let value = e.target.value

        if (value === '' || !new RegExp(this.props.regex, 'gm').test(value)) {
            this.props.setError(this.props.name, true)
        } else {
            this.props.setError(this.props.name, false)
        }
    }

    phoneHandler(e){
        let val = this.props.name === 'phone' ? this.formatPhoneNumber(e.target.value) : e.target.value

        this.props.onChange(this.props.name, val)
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
                      onFocus={() => {
                          this.setState({isFocus: true})
                          this.props.setVisited(this.props.name, true)
                      }}
                      placeholder={this.props.placeholder}
                      value={this.props.getData(this.props.name)}
               />
                <p className="error">{
                    this.props.getError(this.props.name) && (this.props.getVisited(this.props.name) || this.props.submitted) && !this.state.isFocus ? this.textError : ""}
                </p>
            </div>
        )
    }
}


export default FormInput;
