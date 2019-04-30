import React, { Component } from 'react'

class Clicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 1
    }
    this.getRandomNumber = this.getRandomNumber.bind(this)
  }

  getRandomNumber() {
    let rand = Math.floor(Math.random() * 10) + 1
    this.setState({ number: rand })
  }

  render() {
    return (
      <div>
        <h1>Number is {this.state.number}</h1>
        {this.state.number === 7 ? (
          <h2>You WIN!</h2>
        ) : (
          <button onClick={this.getRandomNumber}>Random Number</button>
        )}
      </div>
    )
  }
}

export default Clicker
