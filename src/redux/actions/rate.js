import axios from 'axios';

export const setConvertRate = (obj) => ({
    type: 'SET_CONVERT_RATE',
    payload: obj
});

export const setIsloadedRateChange = (bool) => ({
    type: 'SET_IS_LOADED_RATE_CHANGE',
    payload: bool
})

export const fetchRate = (base, quote) => (dispatch) => {

    axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${base}/${quote}.json`)
            .then(data => Object.values(data.data)[1])
            .then(rate => dispatch(setConvertRate({rate, isLoadedRate: true})));
};