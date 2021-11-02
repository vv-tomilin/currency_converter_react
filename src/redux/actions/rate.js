import axios from 'axios';

export const setConvertRate = (rate) => ({
    type: 'SET_CONVERT_RATE',
    payload: rate
});

export const fetchRate = (base, quote) => (dispatch) => {

    axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${base}/${quote}.json`)
            .then(data => Object.values(data.data)[1])
            .then(rate => dispatch(setConvertRate(rate)));
};