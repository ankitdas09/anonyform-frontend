import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

import { getForm, postResponse } from '../api'

import '../components/styles/showform.styles.css'

const ShowForm = () => {
    const { id } = useParams()

    const [data, setData] = useState([])

    const [responseData, setResponseData] = useState([])

    const [submitted, setSubmitted] = useState(0)

    const [correctForm, setCorrectForm] = useState(1)

    const setUpState = (data) => {
        const values = [...responseData]
        data.map((label, idx) => {
            values.push({ label: label, data: '' })
        })
        setResponseData(values)
    }

    const handleGetForm = async () => {
        const response = await getForm(id)
        if (response) {
            setData(response.data)
            setUpState(response.data)
            setCorrectForm(1)
        } else {
            setCorrectForm(0)
        }
    }

    const handleChange = (e, idx) => {
        const value = e.target.value
        const _data = [...responseData]
        _data[idx]['data'] = value
        setResponseData(_data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            var flag = [];
            for (let i = 0; i < responseData.length; i++) {
                if (responseData[i].data === '') {
                    flag.push(0)
                }
            }
            if (!flag.includes(0)) {
                const response = await postResponse(id, responseData)
                console.log(response)
                setSubmitted(1)
            } else {
                alert('Please fill the form first!')
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleGetForm()
    }, [])

    return (
        <div className='container'>
            {!submitted ?
                correctForm ?
                    <form>
                        <table>
                            <tbody>
                                {data && data.map((label, idx) =>
                                    <tr key={idx} className='form-container'>
                                        {/* <div key={idx} className='form-container'> */}
                                        <td>
                                            <label className='label'>{label}</label>
                                        </td>
                                        <td>
                                            <input className='input-data' type="text" onChange={(e) => handleChange(e, idx)} value={responseData[idx]['data']} required />
                                        </td>
                                        {/* </div> */}
                                    </tr>)
                                }
                            </tbody>
                        </table>
                        <button className='submit-btn' onClick={handleSubmit}>Submit</button>
                    </form>
                    : 'Please Check ID'
                : `Submitted Successfully`}
        </div>
    )
}

export default ShowForm