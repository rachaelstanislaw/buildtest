import React, { Component } from 'react'
import ColorBox from './components/ColorBox'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hex: "#000000",
      messageArr: ["pretty!", "mmm no.", "love it!", "yuck!", "YAS!"],
      message: ""
    }
  }

  changeColor = () => {
    let { hex, messageArr } = this.state
    let hexArr = hex.split("")
    let newColor = ["#"]
    //iterate through the length of the array.
    for(let i = 1; i < hexArr.length; i++){
        //randomize the index value between a integer or a letter
        hexArr[i] = Math.floor(Math.random() * 15)
        //if below 9, just return value of the integer
        if(hexArr[i] <= 9) {
            newColor.push(hexArr[i])
            //If its greater than 9, set a letter value
        } else if(hexArr[i] === 10){
            newColor.push("a")
        } else if(hexArr[i] === 11){
            newColor.push("b")
        } else if(hexArr[i] === 12){
            newColor.push("c")
        } else if(hexArr[i] === 13){
            newColor.push("d")
        } else if(hexArr[i] === 14){
            newColor.push("e")
        } else {
            newColor.push("f")
        }
    }
    let color = newColor.join("").toUpperCase()
    let randomMessage = Math.floor(Math.random() * 5)
    this.setState({ hex: color, message: "Click for a new color" })
  }

  render() {
    let { hex, message } = this.state
    return(
      <>
        <h1>Random Color Generator</h1>
        <ColorBox
          changeColor={ this.changeColor }
          hex = { hex }
          message = { message }
        />
      </>
    )
  }
}
