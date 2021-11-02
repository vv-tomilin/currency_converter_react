const initialState = {
    value: 0,
    base: 'usd',
    quote: 'rub'
};

function inputValues(state = initialState, action) {
    switch (action.type) {
        case 'SET_INPUT_VALUES':
            return {
                ...state,
                value: action.payload.value,
                base: action.payload.base,
                quote: action.payload.quote
            }
        default:
            return state;
    }
}

export default inputValues;