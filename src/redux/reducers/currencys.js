const initialState = {
  currencys: []
};

function currencys(state = initialState, action) {
  switch (action.type) {
    case 'SET_CURRENCYS':
      return {
        ...state,
        currencys: action.payload
      }
    default: return state;
  }
}

export default currencys;