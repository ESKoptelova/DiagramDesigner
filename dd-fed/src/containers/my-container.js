import { connect } from 'react-redux'
import { increaseClickCount } from '../actions'
import MyList from '../components/my-list/my-list'


const mapStateToProps = state => {
    return {
      items: state.items
    }
  }

const mapDispatchToProps = dispatch => {
    return {
      onItemClick: id => {
        dispatch(increaseClickCount(id))
      }
    }
  }

const MyContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(MyList)

export default MyContainer
