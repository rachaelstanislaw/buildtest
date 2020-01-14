import React, { Component } from 'react';
import Button from './Button'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        display: "Pending..."
      }
  }

  displayChange = () => {
    let newDisplay = "Success!"
    this.setState({display: newDisplay})
  }


  render() {
    const { display } = this.state
    return (
      <div>
        <Button display={ display } change={this.displayChange}/>
      </div>
    );
  }
}

export default App;
