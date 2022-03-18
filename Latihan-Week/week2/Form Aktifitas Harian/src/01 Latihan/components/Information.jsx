import React from 'react'

const Information = ({ isInformationShow, showInformation }) => {
    return (
        <div>
            <p>This is Information</p>
            {
                isInformationShow ?
                    <h2>Hari Minggu Libur</h2>
                    : null
            }

            <button onClick={() => showInformation()}>Show Information</button>
        </div>
    )
}

export default Information
