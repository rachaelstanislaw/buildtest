import React, { Component } from 'react'
import ColorBox from './components/ColorBox'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hex: "#000000",
      message: ""
    }
  }

  changeColor = () => {
    // destructure state
    let { hex, messageArr } = this.state
    // create a new array to iterate through to create a random hex code
    let hexArr = [...Array(7).fill("")]
    // //iterate through the length of the hexArr using map
    let color = hexArr.map((value, index) => {
      //randomized number will generate a random character
      let random = Math.floor(Math.random() * 15)
      // first element of array will need to be "#"
      if(index === 0) {
        return "#"
      // if random number is between 0 and 9, return that number
      } else if(random <= 9) {
          return random
          //If it is greater than 9, set a letter value
      } else if(random === 10){
          return "a"
      } else if(random === 11){
          return "b"
      } else if(random === 12){
          return "c"
      } else if(random === 13){
          return "d"
      } else if(random === 14){
          return "e"
      } else {
          return "f"
      }
    }).join("").toUpperCase()
    // set the state of the new hex code and change the message that displays to the user
    this.setState({ hex: color, message: "Click for a new color" })
  }

  render() {
    let { hex, message } = this.state
    return(
      <>
        <h1>Random Color Generator!</h1>
        <ColorBox
          changeColor={ this.changeColor }
          hex = { hex }
          message = { message }
        />
      </>
    )
  }
}
