import './App.css';

import React from "react";

import FormInput from "./components/FormComponents/FormInput";
import FormTextarea from "./components/FormComponents/FormTextarea";
import FormButton from "./components/FormComponents/FormButton";
import FormSubmit from "./components/FormComponents/FormSubmit";
import Modal from "./components/ModalComponents/Modal";
import FormBaseComponent from "./components/FormComponents/FormBaseComponent";

class App extends FormBaseComponent {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearForm = this.clearForm.bind(this)

        this.state = {
            modalActive: false,
            data: this.defaultData,
            errors: this.defaultErrors,
            visited: this.defaultVisited,
            submitted: false
        }
    }

    savedData = {}

    handleSubmit(e) {
        e.preventDefault()
        this.setState({submitted: true})
        let errors = Object.values(this.state.errors)
        if (errors.every(item => item === false)) {
            this.savedData = {...this.state.data}
            this.setState({modalActive: true})
            this.clearForm()
        }
    }

    clearForm() {
        this.setState({data: this.defaultData})
        this.setState({errors: this.defaultErrors})
        this.setState({visited: this.defaultVisited})

        let infos = document.querySelectorAll('.info');

        infos.forEach(info => {
            info.innerHTML = "Characters remaining: " + 600
        })

        this.setState({submitted: false})
    }

    setError(name, value) {
        this.setState(prevState => {
            let errors = {...prevState.errors}
            errors[name] = value
            return { errors }
        })
    }

    getError(name) {
        return this.state.errors[name]
    }

    setVisited(name, value) {
        this.setState(prevState => {
            let visited = {...prevState.visited}
            visited[name] = value
            return { visited }
        })
    }

    getVisited(name) {
        return this.state.visited[name]
    }

    changeHandler(name, value) {
        this.setState(prevState => {
            let data = {...prevState.data}
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
