import React, { useEffect } from 'react';
import { Route } from 'react-router';

import { useDispatch, useSelector } from 'react-redux';

import { setCurrencys } from './redux/actions/currencys.js';
import { fetchRate } from './redux/actions/rate.js';
import { fetchExchangeRates } from './redux/actions/exchangeRates.js';

import { Converter, ExchangeRates } from './pages';

import './style.css';

function App() {

  const dispatch = useDispatch();

  const { value, base, quote } = useSelector(({ input }) => input);
  const { baseCurr, isLoadedExRates } = useSelector(({ exchangeRates }) => exchangeRates);

  const currencys = ['usd', 'eur', 'rub', 'gbp', 'jpy'];

  useEffect(() => {
    dispatch(setCurrencys(currencys));
  }, []);

  useEffect(() => {
    dispatch(fetchRate(base, quote));
  }, [value, base, quote]);

  useEffect(() => {
    dispatch(fetchExchangeRates(baseCurr));
  }, [baseCurr, isLoadedExRates]);

  return (
    <div>
      <Route exact path='/' component={Converter} />
      <Route exact path='/rates' component={ExchangeRates} />
    </div>
  );
}

export default App;