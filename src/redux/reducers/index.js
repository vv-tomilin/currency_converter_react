import { combineReducers } from 'redux';

import input from './input';
import rate from './rate';

const rootReducer = combineReducers({
    input,
    rate
});

export default rootReducer;