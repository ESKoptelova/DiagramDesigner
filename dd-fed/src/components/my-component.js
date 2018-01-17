import React from 'react'
import PropTypes from 'prop-types'
import './my-component.css'

export default class MyComponent extends React.Component {
  render() {

    let text = this.props.text;
    let onClick = this.props.onClick;

    return (
    <div className='my-component'>
      <span>{text}</span>
      <button className='my-button' onClick={onClick}>Click me</button>
    </div>
    );
  }  
}

MyComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}