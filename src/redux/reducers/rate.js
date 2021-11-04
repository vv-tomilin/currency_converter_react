const initialState = {
    rate: 0,
    isLoadedRate: false
};

function rate(state = initialState, action) {
    switch (action.type) {
        case 'SET_CONVERT_RATE':
            return {
                ...state,
                rate: action.payload.rate,
                isLoadedRate: action.payload.isLoadedRate
            }
        case 'SET_IS_LOADED_RATE_CHANGE':
            return {
                ...state,
                isLoadedRate: action.payload
            }
        default: return state;
    }
}

export default rate;