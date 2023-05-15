import './App.css';

import React from "react";

import FormInput from "./components/FormComponents/FormInput";
import FormTextarea from "./components/FormComponents/FormTextarea";
import FormButton from "./components/FormComponents/FormButton";
import FormSubmit from "./components/FormComponents/FormSubmit";
import Modal from "./components/ModalComponents/Modal";

class App extends React.Component {

    regexps = {
        firstName: "^[A-Z]{1}[a-z]+?$",
        lastName: "^[A-Z]{1}[a-z]+?$",
        birthday: "^[0-9]{4}-[0-9]{2}-[0-9]{2}$",
        phone: "^[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}$",
        website: "^((https)://)"
    }

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            modalActive: false,
            data: {
                firstName: "",
                lastName: "",
                phone: "",
                birthday: "",
                website: "",
                description: "",
                technologyStack: "",
                lastProjectDescription: ""
            }
        }
    }

    inputs = [
        {
            id: 1,
            name: "firstName",
            type: "text",
            placeholder: "Your First Name",
            errorMessage: "",
            label: "First Name"
        },
        {
            id: 2,
            name: "lastName",
            type: "text",
            placeholder: "Your Last Name",
            errorMessage: "",
            label: "Last Name"
        },
        {
            id: 3,
            name: "birthday",
            type: "date",
            placeholder: "Your Birthday",
            errorMessage: "",
            label: "Birthday"
        },
        {
            id: 4,
            name: "phone",
            type: "text",
            placeholder: "Your Phone",
            errorMessage: "",
            label: "Phone"
        },
        {
            id: 5,
            name: "website",
            type: "text",
            placeholder: "Your Website",
            errorMessage: "",
            label: "Website"
        },
        {
            id: 6,
            name: "description",
            type: "textarea",
            placeholder: "Your Description",
            errorMessage: "",
            label: "Description"
        },
        {
            id: 7,
            name: "technologyStack",
            type: "textarea",
            placeholder: "Your Technology Stack",
            errorMessage: "",
            label: "Technology Stack"
        },
        {
            id: 8,
            name: "lastProjectDescription",
            type: "textarea",
            placeholder: "Your Last Project Description",
            errorMessage: "",
            label: "Last Project Description"
        },
    ]

    handleSubmit(e) {
        e.preventDefault()
        let data = new FormData(e.target)
        let dataEntries = Object.fromEntries(data.entries())
        let errors = 0
        for (let index in dataEntries) {
            if (this.regexps[index]) {
                let regexp = new RegExp(this.regexps[index])
                if(!regexp.test(dataEntries[index]) || dataEntries[index].length === 0) {
                    errors++
                }
            } else {
                if (dataEntries[index].length > 600 || dataEntries[index].length === 0) {
                    errors++
                }
            }
        }
        if (errors > 0) {
            this.setState({errors: true})
            return;
        }
        this.setState({data: dataEntries})
        this.setState({modalActive: true})
    }

    clearForm() {
        this.setState(prevState => {
            let data = Object.assign({}, prevState.data);
            Object.keys(this.state.data).forEach(key => {
                data[key] = ''
            })
            return { data }
        })
    }

    changeHandler(name, value) {
        this.setState(prevState => {
            let data = Object.assign({}, prevState.data);
            data[name] = value
            return { data }
        })
    }


    render() {
        return (
            <div className="content">
                <div className="container">
                      <div className="contact-wrap">
                          <h3 className="text-center">Create Worksheet</h3>
                          <form onSubmit={this.handleSubmit} noValidate="novalidate">
                              {this.inputs.map(input => {
                                  if (input.type === "textarea") {
                                      return <FormTextarea key={input.id} {...input} value={this.state.data[input.name]} onChange={this.changeHandler.bind(this)} />
                                  } else {
                                      return <FormInput key={input.id} {...input} value={this.state.data[input.name]} onChange={this.changeHandler.bind(this)}/>
                                  }
                              })}
                              <div className="center">
                                  <div className="row form-group text-center">
                                      <FormButton onClick={this.clearForm.bind(this)}/>
                                      <FormSubmit />
                                  </div>
                              </div>
                          </form>
                      </div>
                </div>
                <Modal active={this.state.modalActive} data={this.state.data}/>
            </div>
        );
    }
}


export default App;
