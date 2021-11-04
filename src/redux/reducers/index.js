import { combineReducers } from 'redux';

import input from './input';
import rate from './rate';
import exchangeRates from './exchangeRates';
import currencys from './currencys';

const rootReducer = combineReducers({
    input,
    rate,
    exchangeRates,
    currencys
});

export default rootReducer;