import React from 'react'

const Response = ({ response }) => {
    return (
        <div>
            {response && response.map(
                (data, idx) => <p key={idx}>{data['label']} : {data['data']}</p>
            )}
            <hr></hr>
        </div>
    )
}

export default Response