import React from 'react'

const ShowCreds = ({ creds }) => {
    return (
        < div >
            {
                creds ?
                    <div>
                        <h2>Please Note the access token and form id</h2>
                        <h3>Token : {creds[0] ? creds[0] : 'loading...'}</h3>
                        <h3>Form Id : {creds[1] ? creds[1] : 'loading...'}</h3>
                        <h4>Form Link : https://anonyform.netlify.app/{`forms/${creds[1]}`}</h4>
                        <h4>Responses : https://anonyform.netlify.app/{`forms/responses/${creds[1]}/${creds[0]}`}</h4>
                    </div> : 'Something went wrong!'
            }
        </div >
    )
}

export default ShowCreds