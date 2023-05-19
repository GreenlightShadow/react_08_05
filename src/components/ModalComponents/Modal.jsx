import React from 'react';
import './modal.css'

const Modal = (props) => {

    return (
        <div className={props.active ? "modal active" : "modal"} onClick={props.close}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <h1>Hello {props.data.firstName} {props.data.lastName}</h1>
                <h3>Your data is:</h3>
                {props.inputs.map((input) => {
                    return (
                        <p key={input.id}>
                            {input.label}: {props.data[input.name]}
                        </p>
                    );
                })}
            </div>
        </div>
    )
}

export default Modal;