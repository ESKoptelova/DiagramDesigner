import React from 'react'
import PropTypes from 'prop-types'
import './my-component.css'

export default class MyComponent extends React.Component {
  render() {

    let text = this.props.text;
    let onClick = this.props.onClick;
    let counter = this.props.counter;

    return (
    <div className='my-component'>
      <span>{text} {counter}</span>
      <button className='my-button' onClick={onClick}>Click me</button>
    </div>
    );
  }  
}

MyComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired
}