import React from 'react'

// Menerima props dan method
const Age = ({ person, changePerson }) => {
    return (
        <div>
            <label htmlFor="age">Input Name:</label>
            <input type="text" name="age" value={person.age} onChange={(event) => changePerson(event, 'age')} />
        </div>
    )
}

export default Age
