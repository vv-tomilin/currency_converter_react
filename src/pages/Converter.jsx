import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { setInputValues } from '../redux/actions/input.js';

function Converter() {


  const dispatch = useDispatch();
  const { value, base, quote } = useSelector(({ input }) => input);

  const [inputValue, setInputValue] = useState('');
  const [validInput, setValidInput] = useState(false);
  const [firstChange, setFirstChange] = useState(true);
  const [multConvert, setMultConvert] = useState(0);

  const { rate, isLoadedRate } = useSelector(({ rate }) => rate);
  const { currencys } = useSelector(({ currencys }) => currencys);

  const handleChange = (event) => {
    setInputValue(event.target.value.toLowerCase().split(' '));
  };

  const enterKeyDown = (event) => {
    if (event.keyCode === 13) {

      setFirstChange(false);

      //* валидация введенной строки
      if (inputValue.length === 4 && isNumber(inputValue[0])
        && currencys.includes(inputValue[1].toLowerCase())
        && currencys.includes(inputValue[3].toLowerCase())) {

        const valuesObj = {
          value: inputValue[0],
          base: inputValue[1].toLowerCase(),
          quote: inputValue[3].toLowerCase()
        };

        dispatch(setInputValues(valuesObj));
        setValidInput(true);
      } else setValidInput(false);

    }
  };

  useEffect(() => {
    if (validInput && isLoadedRate) {
      setMultConvert(rate * inputValue[0])
    }
  }, [rate, value, base, quote]);

  return (
    <div className='converter'>
      <h1>Конвертер валют</h1>
      <input
        placeholder='15 usd in rub...'
        className='converter__input'
        onChange={handleChange}
        onKeyDown={enterKeyDown} />
      {validInput &&
        <p
          className='converter__result'>
          {value} {base.toUpperCase()} = {multConvert.toFixed(4)} {quote.toUpperCase()}
        </p>}
      {(!validInput && !firstChange) && <p className='converter__result'>Введенное значение не валидно...</p>}
      {firstChange && <p className='converter__result'>Введите значение для конвертации пожалуйста...</p>}

      <Link to='/rates'>
        <button className='link-button converter__link'>Смотреть курсы валют</button>
      </Link>
      <div className='converter__notice'>
        <h2>Справка:</h2>
        <div>
          Для конвертации введите значение в формате -
          <span> [сумма валюты]</span> <span>[короткое название валюты]</span> которую хотите конвертировать,
          <span> [in]</span> <span>[короткое название валюты]</span>,
          в котроую хотите конвертировать и нажмите <span>ENTER.</span>
          <p>
            <span>Например: </span>
            <span className='converter__notice-example'>15 usd in rub </span>
            или <span className='converter__notice-example'>24 EUR in usd </span><span> + [ENTER] </span>
            регистр не имеет значения.
          </p>
          <p>Доступные валюты - {currencys && currencys.map((curr, i) => {
            return (
              <span key={i}>{curr.toUpperCase()} </span>
            )
          })}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Converter;

function isNumber(num) {
  const isNum = Number(num) + 1;

  if (typeof isNum === 'number') {
    return true;
  } else return false;
}
