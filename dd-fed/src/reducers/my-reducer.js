const myReducers = (state = [], action) => {
    switch (action.type) {
      case 'CLICK':
        var newState = state.map(item =>
            (item.id === action.id) 
              ? { ...item, counter: ++item.counter }
              : item
          );
          return newState;

      default:
        return state
    }
  }
  
  export default myReducers
