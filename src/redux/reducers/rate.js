const initialState = {
    rate: 0
};

function rate(state = initialState, action) {
    switch (action.type) {
        case 'SET_CONVERT_RATE':
            return {
                ...state,
                rate: action.payload
            }
        default: return state;
    }
}

export default rate;