import React, { useState } from 'react'
//! Conditional
// import LoginControl from './Conditional/Example1/LoginControl'
// import UserGreeting from './Conditional/Example2/UserGreeting'
// import MailBox from './Conditional/Example3/MailBox'
// import Page from './Conditional/Example4/Page'
// import Toggle from './Conditional/Example5/Toggle'
// import HomePage from './Conditional/Exampl/e6/HomePage'
// import GameofChange from './Conditional/Example7/GameofChange'
// import IfElse from './Conditional/Example8/IfElse'
// import Conditional from './Conditional/Example9/Conditional'

//! Events
// import Product from './Events/Example1/Product'
// import BoxFunction from './Events/Example2/BoxFunction'
// import Home from './Events/Example3/Home'
// import StateOperan from './Events/Example4/StateOperan'
// import Parent from './Events/Example5/Parent'
// import FreeCode from './Events/Example6/FreeCode'

//! Form
// import Parents from './Form/Example1/Parents'
// import Home from './Form/Example2/Home'
// import Input from './Form/Example3/Input'
// import Condtional from './Form/Example4/Condtional'
// import Qestion from './Form/Example5/Qestion'
// import NameForm from './Form/Example7/NameForm'

//! LifeCycle
import MyFunc from './LifeCycle/Example1/MyFunc'

//! List & Key
// import MapLooping from './List&Key/Example1/MapLooping'
// import Looping from './List&Key/Example2/Looping'
// import Users from './List&Key/Example3/Users'
// import Images from './List&Key/Example4/Images'
const HomeWeek2 = () => {
    // const messages = ['React', 'Re: React', 'Re:Re: React']

    const [toggle, setToggle] = useState(true)
    // const handleToggle = () => setToggle(currentState => !currentState)
    const handleToggle = () => {
        setToggle(currentState => {
            return !currentState
        })
    }
    return (
        <div>
            {/* // TODO <h2>Conditional</h2> */}
            {/* <LoginControl /> */}
            {/* <UserGreeting /> */}
            {/* <MailBox unreadMessages={messages} /> */}
            {/* <Page /> */}
            {/* <Toggle /> */}
            {/* <HomePage /> */}
            {/* <GameofChange /> */}
            {/* <IfElse /> */}
            {/* <Conditional /> */}

            {/* // TODO <h2>Event</h2> */}
            {/* <Product /> */}
            {/* <BoxFunction /> */}
            {/* <Home /> */}
            {/* <StateOperan /> */}
            {/* <Parent /> */}
            {/* <FreeCode /> */}
            {/* <h2>Form</h2> */}
            {/* <Parents /> */}
            {/* <Home /> */}
            {/* <Input /> */}
            {/* <Condtional /> */}
            {/* <Qestion /> */}
            {/* <NameForm /> */}

            <h2>LifeCycle</h2>
            <button onClick={handleToggle}>Toggle</button>
            {toggle && <MyFunc />}


            {/* // TODO <h2>List & key </h2> */}
            {/* <MapLooping /> */}
            {/* <Looping /> */}
            {/* <Users /> */}
            {/* <Images /> */}
        </div>
    )
}

export default HomeWeek2