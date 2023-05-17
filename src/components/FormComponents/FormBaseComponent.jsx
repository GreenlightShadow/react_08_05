import React from "react";
import './form.css'

class FormBaseComponent extends React.Component {

    defaultData = {
        firstName: "",
        lastName: "",
        phone: "",
        birthday: "",
        website: "",
        description: "",
        technologyStack: "",
        lastProjectDescription: ""
    }

    defaultErrors = {
        firstName: true,
        lastName: true,
        phone: true,
        birthday: true,
        website: true,
        description: true,
        technologyStack: true,
        lastProjectDescription: true
    }

    defaultVisited = {
        firstName: false,
        lastName: false,
        phone: false,
        birthday: false,
        website: false,
        description: false,
        technologyStack: false,
        lastProjectDescription: false
    }

    regexps = {
        firstName: "^[A-Z]{1}[a-z]+?$",
        lastName: "^[A-Z]{1}[a-z]+?$",
        birthday: "^[0-9]{4}-[0-9]{2}-[0-9]{2}$",
        phone: "^[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}$",
        website: "^(http|https)://"
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
}


export default FormBaseComponent;
