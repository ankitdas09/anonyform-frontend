import React from 'react'

const ShowCreds = ({ creds }) => {
    return (
        < div >
            {
                creds ?
                    <div>
                        <h2>Please copy both links</h2>
                        {creds[1] ?
                            <>
                                <h6>Form Link : https://anonyform.netlify.app/{`forms/${creds[1]}`}</h6>
                                <h6>Responses : https://anonyform.netlify.app/{`forms/responses/${creds[1]}/${creds[0]}`}</h6>
                            </>
                            : 'Loading link ... Please wait'
                        }
                        <p>Token : {creds[0] ? creds[0] : 'loading...'}</p>
                        <p>Form Id : {creds[1] ? creds[1] : 'loading...'}</p>
                        {/* <h6>Format : https://anonyform.netlify.app/forms/ formID </h6> */}
                        {/* {/* <h6>Response Format : https://anonyform.netlify.app/forms/responses/ formID / accessToken</h6> */}
                    </div> : 'Something went wrong!'
            }
        </div >
    )
}

export default ShowCreds