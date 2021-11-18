import React from 'react'

// Meneriman props dan method
const Name = ({ person, changePerson }) => {
    return (
        <div>
            <label htmlFor="name">Input Name:</label>
            <input type="text" name="name" value={person.name} onChange={(event) => changePerson(event, 'name')} />
        </div>
    )
}

export default Name
