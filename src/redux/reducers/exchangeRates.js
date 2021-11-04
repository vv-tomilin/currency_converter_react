const lang = window.navigator.language;
let defaultBase = '';

if (lang === 'ru' || lang === 'ru-RU') {
  defaultBase = 'rub';
} else if (lang === 'en' || 'en-EN') {
  defaultBase = 'usd';
} else defaultBase = 'usd';

const initialState = {
  baseCurr: defaultBase,
  exchangeRates: [],
  isLoadedExRates: false
};

function exchangeRates(state = initialState, action) {
  switch (action.type) {
    case 'SET_CHANGE_BASE_CURRENCY':
      return {
        ...state,
        baseCurr: action.payload
      }
    case 'SET_EXCHANGE_RATES':
      return {
        ...state,
        exchangeRates: action.payload,
      }
    case 'SET_LOADED_EXCHANGE_RATES':
      return {
        ...state,
        isLoadedExRates: true
      }
    default: return state;
  }
}

export default exchangeRates;