

import React, { Component } from 'react'
import Counter1 from './component/counter1'

export default class App extends Component {
constructor (){
super()
this.state ={
  count:0
}
}
  componentDidMount(){
    //renders whenever the component is render for the first time 
    console.log("componentDidMount: when component render first time")

  }
  increment(){
    this.setState({count:this.state.count +1})
  }
  componentWillUnmount(){
    console.log("conmponent removed")
  }
  render() {
    return (
    <div>
            <Counter1 number={this.state.count}></Counter1>

      {/* <Counter number={this.state.count}></Counter> */}
      {/* <h1>{this.state.count}</h1> */}
      <button onClick={()=>this.increment()}>Click Me!</button>
    </div>
    )
  }
}
