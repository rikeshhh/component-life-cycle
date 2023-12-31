import React, { Component } from 'react'

export default class Counter extends Component {
    componentDidUpdate(prevProps,prevState){
        if (prevProps.number != this.props.number) {
            console.log(this.props.number)
        console.log(prevProps.number)
            console.log("conponent updated")
        }
    }
  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    )
  }
}
