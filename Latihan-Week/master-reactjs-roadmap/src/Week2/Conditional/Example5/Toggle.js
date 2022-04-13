import React, { useState } from 'react'
import Test from './Test'

const Toggle = () => {
    const [isToggle, setToggle] = useState(false)
    return (
        <div>
            <button onClick={() => setToggle(!isToggle)}>Toggle</button>
            {/* {isToggle && <Test />} */}
            {isToggle ? <Test /> : null}
            {/* <Test /> */}
        </div>
    )
}

export default Toggle