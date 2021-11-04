import axios from 'axios';

export const setExchangeRates = (arr) => ({
  type: 'SET_EXCHANGE_RATES',
  payload: arr
});

export const setLoadedExchangeRates = (bool) => ({
  type: 'SET_LOADED_EXCHANGE_RATES',
  payload: bool
});

export const fetchExchangeRates = (baseCurr) => (dispatch) => {

  axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${baseCurr}.json`)
    .then(json => {
      return Object.entries(Object.values(json.data)[1]);
    })
    .then(arr => {
      dispatch(setExchangeRates(arr));
      dispatch(setLoadedExchangeRates(true));
    });
};