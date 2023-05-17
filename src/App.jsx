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
        website: "^(http|https)://"
    }

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearForm = this.clearForm.bind(this)

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
            },
            errors: {
                firstName: true,
                lastName: true,
                phone: true,
                birthday: true,
                website: true,
                description: true,
                technologyStack: true,
                lastProjectDescription: true
            },
            visited: {
                firstName: false,
                lastName: false,
                phone: false,
                birthday: false,
                website: false,
                description: false,
                technologyStack: false,
                lastProjectDescription: false
            },
            submitted: false
        }
    }

    inputs = [
        {
            id: 1,
            name: "firstName",
            type: "text",
            placeholder: "Your First Name",
            label: "First Name"
        },
        {
            id: 2,
            name: "lastName",
            type: "text",
            placeholder: "Your Last Name",
            label: "Last Name"
        },
        {
            id: 3,
            name: "birthday",
            type: "date",
            placeholder: "Your Birthday",
            label: "Birthday"
        },
        {
            id: 4,
            name: "phone",
            type: "text",
            placeholder: "Your Phone",
            label: "Phone"
        },
        {
            id: 5,
            name: "website",
            type: "text",
            placeholder: "Your Website",
            label: "Website"
        },
        {
            id: 6,
            name: "description",
            type: "textarea",
            placeholder: "Your Description",
            label: "Description"
        },
        {
            id: 7,
            name: "technologyStack",
            type: "textarea",
            placeholder: "Your Technology Stack",
            label: "Technology Stack"
        },
        {
            id: 8,
            name: "lastProjectDescription",
            type: "textarea",
            placeholder: "Your Last Project Description",
            label: "Last Project Description"
        },
    ]
    savedData = {}

    handleSubmit(e) {
        e.preventDefault()
        this.setState({submitted: true})
        let errors = Object.values(this.state.errors)
        if (errors.every(item => item === false)) {
            this.savedData = Object.assign({}, this.state.data)
            this.setState({modalActive: true})
            this.clearForm()
        }
    }

    clearForm() {
        this.setState(prevState => {
            let data = Object.assign({}, prevState.data);
            Object.keys(this.state.data).forEach(key => {
                data[key] = ''
            })
            return { data }
        })
        this.setState(prevState => {
            let errors = Object.assign({}, prevState.errors);
            Object.keys(this.state.errors).forEach(key => {
                errors[key] = true
            })
            return { errors }
        })
        this.setState(prevState => {
            let visited = Object.assign({}, prevState.visited);
            Object.keys(this.state.visited).forEach(key => {
                visited[key] = false
            })
            return { visited }
        })
        this.setState({submitted: false})
    }

    setError(name, value) {
        this.setState(prevState => {
            let errors = Object.assign({}, prevState.errors);
            errors[name] = value
            return { errors }
        })
    }

    getError(name) {
        return this.state.errors[name]
    }

    setVisited(name, value) {
        this.setState(prevState => {
            let visited = Object.assign({}, prevState.visited);
            visited[name] = value
            return { visited }
        })
    }

    getVisited(name) {
        return this.state.visited[name]
    }

    changeHandler(name, value) {
        this.setState(prevState => {
            let data = Object.assign({}, prevState.data);
            data[name] = value
            return { data }
        })
    }

    getData(name) {
        return this.state.data[name]
    }

    closeModal() {
        this.setState({modalActive: false})
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
                                      return <FormTextarea
                                          key={input.id}
                                          {...input}
                                          value={this.state.data[input.name]}
                                          onChange={this.changeHandler.bind(this)}
                                          setError={this.setError.bind(this)}
                                          getError={this.getError.bind(this)}
                                          setVisited={this.setVisited.bind(this)}
                                          getVisited={this.getVisited.bind(this)}
                                          submitted={this.state.submitted}
                                      />
                                  } else {
                                      return <FormInput
                                          key={input.id}
                                          {...input}
                                          value={this.state.data[input.name]}
                                          onChange={this.changeHandler.bind(this)}
                                          setError={this.setError.bind(this)}
                                          getError={this.getError.bind(this)}
                                          setVisited={this.setVisited.bind(this)}
                                          getVisited={this.getVisited.bind(this)}
                                          regex={this.regexps[input.name]}
                                          getData={this.getData.bind(this)}
                                          submitted={this.state.submitted}
                                      />
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
                <Modal active={this.state.modalActive} close={this.closeModal.bind(this)} data={this.savedData}/>
            </div>
        );
    }
}


export default App;
