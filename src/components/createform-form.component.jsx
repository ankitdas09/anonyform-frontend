import React, { useState } from 'react'
import { getForm, createForm } from '../api'
import { v4 as uuidv4 } from 'uuid';

import '../components/styles/createform.styles.css'

const CreateForm = ({ handleFormCreated, setCreds }) => {
    const [label, setLabel] = useState('')
    const [labels, setLabels] = useState([])

    const handleChange = (e) => {
        setLabel(e.target.value)
    }
    const handleAdd = () => {
        if (label) {
            setLabel('')
            setLabels([...labels, label])
        }
    }
    const handleCreate = async () => {
        const data = await createForm(labels)
        console.log(data)
        setLabel('')
        setLabels([])
        // setFormCreated(1)
        setCreds(data)
    }
    return (
        <div>
            <div className='form-input-container'>
                <h2 style={{ fontWeight: 'lighter' }}>Create New Form</h2>
                <h3>Add New Field: </h3>
                <input type="text" name="" id="" onChange={handleChange} value={label} />
                <input type="button" value="Add" onClick={handleAdd} />
            </div>
            <div>
                <h4>Form Properties: </h4>
                {labels.map((label, idx) => <p key={uuidv4()}>{label}</p>)}
            </div>
            <div>
                {labels.length ?
                    <button className='btn' onClick={() => {
                        handleCreate()
                        handleFormCreated()
                    }}>Create Form</button> : ''
                }
            </div>
        </div>
    )
}

export default CreateForm