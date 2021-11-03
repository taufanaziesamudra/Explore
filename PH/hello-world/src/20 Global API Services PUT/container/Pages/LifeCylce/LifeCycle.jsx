// Library
import React, { Component, Fragment } from 'react'
import { GLobalConsumer } from '../../../context/context'

// Style
import './LifeCycle.css'

export class LifeCycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
        console.log("constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("componentDidmount");
        // // SetTimeOut untuk mengupdate state darai 1 menjadi 2 dnegan jeda waktu 5 menit
        // setTimeout(() => {
        //     this.setState({
        //         count: 2
        //     })
        // }, 5000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.group("shouldComponentupdate")
        // console.log("nextProps", nextProps)
        console.log("nextState", nextState)
        console.log("this state:", this.state)
        console.groupEnd()
        // Jika update lebih dari 4 maka akan update berhenti
        if (nextState.count >= 4) {
            return false
        }
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapShotBeforeUpdate")
        return null
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log("componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    handleCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <Fragment>
                <p>Halaman LifeCycle </p>
                <hr />
                <button className="btn" onClick={this.handleCount}>Component Button {this.state.count}</button>
                <hr />
                <p>Total Order {this.props.state.totalOrder}</p>
            </Fragment>
        )
    }
}

export default GLobalConsumer(LifeCycle)
