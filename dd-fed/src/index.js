import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import myApp from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initialState = { 
    items: [
        {id:123, text:'hello there', counter: 1}
    ] 
  };
let store = createStore(myApp, initialState);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
