import React from "react";
import {useState} from "react";
import './form.css'

const FormInput = (props) => {

    const [isFocus, setIsFocus] = useState(false)

    const textError = `${props.label} is invalid`

    const validatorHandler = ({ target: { value } }) => {
        setIsFocus(false)

        if (value === '' || !new RegExp(props.regex, 'gm').test(value)) {
            props.setError(props.name, true)
        } else {
            props.setError(props.name, false)
        }
    }

    const phoneHandler = ({ target: { value } }) => {
        let val = props.name === 'phone' ? formatPhoneNumber(value) : value
        props.onChange(props.name, val)
    }

    const formatPhoneNumber = (val) => {
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

    return (
        <div className="form-container">
            <label className="col-form-label">
                {props.label}
            </label>
            <input type={props.type ?? 'text'}
                   className="form-control"
                   name={props.name}
                   onBlur={validatorHandler}
                   onChange={phoneHandler}
                   onFocus={() => {
                       setIsFocus(true)
                       props.setVisited(props.name, true)
                   }}
                   placeholder={props.placeholder}
                   value={props.value}
            />
            <p className="error">{
                props.getError && (props.getVisited || props.submitted) && !isFocus ? textError : ""}
            </p>
        </div>
    )
}


export default FormInput;
