import React from 'react';
import './modal.css'

class Modal extends React.Component{

    render() {
        return (
            <div className={this.props.active ? "modal active" : "modal"} onClick={this.props.close}>
                <div className="modal__content" onClick={e => e.stopPropagation()}>
                    <h1>Hello {this.props.data.firstName} {this.props.data.lastName}</h1>
                    <h3>Your data is:</h3>
                    <p>Phone: {this.props.data.phone}</p>
                    <p>Birthday: {this.props.data.birthday}</p>
                    <p>Website: {this.props.data.website}</p>
                    <p>Your Description: {this.props.data.description}</p>
                    <p>Your Skill Stack: {this.props.data.technologyStack}</p>
                    <p>Your Last Project Description: {this.props.data.lastProjectDescription}</p>
                </div>
            </div>
        );
    }
}

export default Modal;