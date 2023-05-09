import './App.css';
import './bootstrap.min.css';

import React from "react";

import FormInput from "./components/FormInput";
import FormTextarea from "./components/FormTextarea";
import FormButton from "./components/FormButton";
import FormSubmit from "./components/FormSubmit";

class App extends React.Component {

    render() {
        return (
            <div className="content">
                <div className="container">
                    <div className="row align-items-stretch justify-content-center no-gutters">
                        <div className="col-md-7">
                            <div className="form h-100 contact-wrap p-5">
                                <h3 className="text-center">Create Worksheet</h3>
                                <form className="mb-5" id="contactForm" name="contactForm"
                                      noValidate="novalidate">
                                    <FormInput field="firstName"/>
                                    <FormInput field="lastName"/>
                                    <FormInput field="birthday" type="date"/>
                                    <FormInput field="phone" type="phone"/>
                                    <FormInput field="website"/>

                                    <FormTextarea field="description"/>
                                    <FormTextarea field="technologyStack"/>
                                    <FormTextarea field="lastProjectDescription"/>

                                    <div className="row justify-content-center">
                                        <div className="row form-group text-center">
                                            <FormButton />
                                            <FormSubmit />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;
