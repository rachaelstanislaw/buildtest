import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { display } = this.props

    return (
      <div>
        <h1>{ display }</h1>
        <button onClick={ this.props.change }>Click me!</button>
      </div>
    )
  }

}
export default Button
