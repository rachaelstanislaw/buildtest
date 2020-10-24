import React, { Component } from 'react'

function ColorBox(props){
  const divStyle = {
    backgroundColor: props.hex
  }
  return(
    <>
      <div
        onClick={ () => props.changeColor() }
        id="colorbox"
        style={ divStyle }
      >
        <div id="button">
          🌈{ props.hex }
          <br></br>
          <div id="message">{ props.message }</div>
        </div>
      </div>
    </>
  )
}

export default ColorBox
