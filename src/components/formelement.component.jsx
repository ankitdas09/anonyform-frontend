import React from 'react'

const FormElement = ({ label }) => {
    return (
        <div>
            <label>{label}</label>
            <input type="text" />
        </div>
    )
}

export default FormElement