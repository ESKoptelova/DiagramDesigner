import React from 'react'
import PropTypes from 'prop-types'
import MyComponent from '../my-component/my-component'

export default class MyList extends React.Component {
  render() {

    let items = this.props.items;
    let onClick = this.props.onItemClick;

    return (
      <div>
        {items.map(item => (
          <MyComponent key={item.id} {...item} onClick={() => onClick(item.id)}  />
        ))}
    </div>   
    );
  }  
}

MyList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      counter: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onItemClick: PropTypes.func.isRequired
}