import React from "react";
import './form.css'

class FormBaseComponent extends React.Component {

    camelcaseToText(camel) {
        let result = camel.replace(/([A-Z])/g, " $1")
        return result.charAt(0).toUpperCase() + result.slice(1)
    }
}


export default FormBaseComponent;
