import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { setChangeBaseCurrency, setLoadedExchangeRates } from '../redux/actions/exchangeRates';

function ExchangeRates() {

  const dispatch = useDispatch();

  const { baseCurr } = useSelector(({ exchangeRates }) => exchangeRates);
  const { currencys } = useSelector(({ currencys }) => currencys);
  const { exchangeRates, isLoadedExRates } = useSelector(({ exchangeRates }) => exchangeRates);

  const [showRates, setShowRates] = useState([]);
  const [toggleBaseCurr, setToggleBaseCurr] = useState(false);

  useLayoutEffect(() => {

    if (isLoadedExRates) {
      let arr = [];

      exchangeRates.forEach((rate, index) => {
        if (currencys.includes(rate[0]) && rate[0] !== baseCurr) {
          arr.push({
            id: index,
            rateLabel: rate[0],
            quoteValue: rate[1]
          })
        }
      });

      setShowRates(arr);

      dispatch(setLoadedExchangeRates(false));
    }

  }, [isLoadedExRates, baseCurr, exchangeRates]);

  const onToggleBaseCurrList = () => {
    setToggleBaseCurr(!toggleBaseCurr);
  };

  const onChangeBaseCurrency = (baseCurr) => {
    dispatch(setChangeBaseCurrency(baseCurr));
  }

  return (
    <div className='exchange-rates'>
      <h1>Курсы валют по отношению к {baseCurr.toUpperCase()}</h1>

      <button onClick={onToggleBaseCurrList}>{baseCurr}</button>
      {toggleBaseCurr &&
        <ul>
          {
            currencys && currencys.map((curr, i) => {
              return (
                <li key={i} onClick={() => onChangeBaseCurrency(curr)}>{curr}</li>
              )
            })
          }
        </ul>
      }

      <ul className='exchange-rates__list'>{
        showRates && showRates.map((rate) => {
          return (
            <li className='exchange-rates__list-item' key={rate.id} >
              <p className='exchange-rates__item-label'>{rate.rateLabel.toUpperCase()}</p>
              <p>{rate.quoteValue.toFixed(4)}</p>
            </li>
          )
        })
      }</ul>
      <Link to='/'>
        <button className='link-button converter__link'>Конвертер</button>
      </Link>
    </div>
  )
}

export default ExchangeRates;
