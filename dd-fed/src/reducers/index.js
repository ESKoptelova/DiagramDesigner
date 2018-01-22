import { combineReducers } from 'redux'
import myReducer from './my-reducer'

const myApp = combineReducers({
    items: myReducer
})

export default myApp