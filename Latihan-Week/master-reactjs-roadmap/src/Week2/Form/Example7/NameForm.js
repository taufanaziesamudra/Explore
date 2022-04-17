import React, { Component } from 'react'

class NameForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit(event) {
    alert('Data mau ditambakn :' + this.state.name)
    event.preventDefault()
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type='text' name={this.state.name}
              onChange={this.handleChange}></input>
          </label>
          <button type='submit'>Add</button>
        </form>
      </div>
    )
  }
}

export default NameForm