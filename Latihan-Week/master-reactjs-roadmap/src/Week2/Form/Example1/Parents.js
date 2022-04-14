import React, {useState} from 'react'
import Child from './Child'

const Parents = () => {
    const [value, setValue] = useState("")

const handleChange = (newValue) => {
    setValue(newValue)
}
    return (
        <div>
            <Child value={value} onChange={handleChange} />
                <h1>{value}</h1>
        </div>
    
    )
}

export default Parents
