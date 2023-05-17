import React from 'react';
import './modal.css'
import FormBaseComponent from "../FormComponents/FormBaseComponent";

class Modal extends FormBaseComponent{

    render() {
        return (
            <div className={this.props.active ? "modal active" : "modal"} onClick={this.props.close}>
                <div className="modal__content" onClick={e => e.stopPropagation()}>
                    <h1>Hello {this.props.data.firstName} {this.props.data.lastName}</h1>
                    <h3>Your data is:</h3>
                    {this.inputs.map((input) => {
                        return (
                            <p key={input.id}>
                                {input.label}: {this.props.data[input.name]}
                            </p>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Modal;