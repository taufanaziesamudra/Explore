import React from 'react'

const Greeting03 = (props) => {
    return (
        <div>
            <p onClick={props.clickParagraph}>Heloo coy! My name is {props.name} and i am {props.age} years old</p>
        </div>
    )
}

export default Greeting03
