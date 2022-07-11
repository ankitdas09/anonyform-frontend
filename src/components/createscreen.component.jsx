import React, { useState } from 'react'

import CreateForm from './createform-form.component';
import ShowCreds from './show-creds.component';
const CreateScreen = () => {
    const [formCreated, setFormCreated] = useState(0)
    const [creds, setCreds] = useState([])

    const handleFormCreated = () => {
        setFormCreated(1);
    }
    return (
        <div className="App">
            {!formCreated ?
                <CreateForm handleFormCreated={handleFormCreated} setCreds={setCreds} />
                : <ShowCreds creds={creds} />
            }
        </div>
    )
}

export default CreateScreen