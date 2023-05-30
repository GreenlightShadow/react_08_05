import './App.css';

import React, {useState} from "react";

import FormInput from "./components/FormComponents/FormInput";
import FormTextarea from "./components/FormComponents/FormTextarea";
import FormButton from "./components/FormComponents/FormButton";
import FormSubmit from "./components/FormComponents/FormSubmit";
import Modal from "./components/ModalComponents/Modal";
import defaultData from "./consts/defaultData";
import defaultErrors from "./consts/defaultErrors";
import defaultVisited from "./consts/defaultVisited";
import inputs from "./consts/inputs";
import regexps from "./consts/regexps";

const App = () => {

    const [modalActive, setModalActive] = useState(false)
    const [dataList, setDataList] = useState(defaultData)
    const [errors, setErrors] = useState(defaultErrors)
    const [visitedList, setVisitedList] = useState(defaultVisited)
    const [submitted, setSubmitted] = useState(false)

    const[savedData, setSavedData] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        let errorList = Object.values(errors)

        if (errorList.every(item => item === false)) {
            setSavedData({...dataList})
            setModalActive(true)
            clearForm()
        }
    }

    const setError = (name, value) => {
        setErrors(error => ({
            ...error,
            [name] : value,
        }))
    }

    const setData = (name, value) => {
        setDataList(data => ({
            ...data,
            [name] : value,
        }))
    }

    const setVisited = (name, value) => {
        setVisitedList(visited => ({
            ...visited,
            [name] : value,
        }))
    }

    const clearForm = () => {
        setDataList(defaultData)
        setErrors(defaultErrors)
        setVisitedList(defaultVisited)
        setSubmitted(false)
    }

    return (
        <div className="content">
            <div className="container">
                <div className="contact-wrap">
                    <h3 className="text-center">Create Worksheet</h3>
                    <form onSubmit={handleSubmit} noValidate="novalidate">
                        {inputs.map(input => {
                            if (input.type === "textarea") {
                                return <FormTextarea
                                    key={input.id}
                                    {...input}
                                    value={dataList[input.name]}
                                    onChange={setData}
                                    setError={setError}
                                    getError={errors[input.name]}
                                    setVisited={setVisited}
                                    getVisited={visitedList[input.name]}
                                    submitted={submitted}
                                />
                            } else {
                                return <FormInput
                                    key={input.id}
                                    {...input}
                                    value={dataList[input.name]}
                                    onChange={setData}
                                    setError={setError}
                                    getError={errors[input.name]}
                                    setVisited={setVisited}
                                    getVisited={visitedList[input.name]}
                                    regex={regexps[input.name]}
                                    submitted={submitted}
                                />
                            }
                        })}
                        <div className="center">
                            <div className="row form-group text-center">
                                <FormButton onClick={clearForm}/>
                                <FormSubmit />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Modal active={modalActive} close={() => setModalActive(false)} data={savedData} inputs={inputs}/>
        </div>
    )
}


export default App;
