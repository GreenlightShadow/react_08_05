import React from "react";
import {useState} from "react";
import './form.css'

const FormTextarea = (props) => {

    const [counter, setCounter] = useState(0)
    const [isFocus, setIsFocus] = useState(false)

    const limit = 600
    const textError = `${props.label}  should not be longer than ${limit} characters or empty`

    const inputHandler = (e) => {
        let val = e.target.value
        setCounter(val.length)
        props.onChange(props.name, val)

    }

    const validatorHandler = (e) => {
        setIsFocus(false)
        let value = e.target.value

        if (value.length === 0 || value.length >= limit) {
            props.setError(props.name, true)
        } else {
            props.setError(props.name, false)
        }
    }


    return (
        <div className="form-container">
            <label className="col-form-label">
                {props.label}
            </label>
            <textarea className="form-control"
                      cols="30"
                      rows="7"
                      name={props.name}
                      placeholder={props.placeholder}
                      onChange={inputHandler}
                      onBlur={validatorHandler}
                      onFocus={() => {
                          setIsFocus(true)
                          props.setVisited(props.name, true)
                      }}
                      style={{resize: 'none'}}
                      value={props.value}
            >
            </textarea>
            <div className="row form-textarea">
                <p className="info">{"Characters remaining: " + (600 - counter)}</p>
                <p className="error">{
                    props.getError && (props.getVisited || props.submitted) && !isFocus ? textError : ""
                }
                </p>
            </div>
        </div>
    );
}

export default FormTextarea;
