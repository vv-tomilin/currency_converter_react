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
    setToggleBaseCurr(!toggleBaseCurr);
  }

  return (
    <div className='exchange-rates'>
      <h1 className='exchange-rates__title'>Курсы валют по отношению к <span>{baseCurr.toUpperCase()}</span></h1>
      <div className='exchange-rates__curr-change-wrapper'>
        <div className="exchange-rates__label-btn-wrapper">
          <p>Изменить базовую валюту:</p>
          <button
            className='exchange-rates__btn-change-base'
            onClick={onToggleBaseCurrList}>
            {baseCurr.toUpperCase()}
          </button>
        </div>
        {toggleBaseCurr &&
          <ul className='exchange-rates__base-curr-list'>
            {
              currencys && currencys.map((curr, i) => {
                return (
                  <li
                    className='exchange-rates__base-curr-item'
                    key={i}
                    onClick={() => onChangeBaseCurrency(curr)}>
                    {curr}
                  </li>
                )
              })
            }
          </ul>
        }
      </div>

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
        <button className='link-button converter__link ex-btn-mob'>Конвертер</button>
      </Link>
    </div>
  )
}

export default ExchangeRates;
