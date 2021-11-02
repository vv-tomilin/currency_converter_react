import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setInputValues } from '../redux/actions/input.js';
import { fetchRate } from '../redux/actions/rate.js';

function Converter() {
    const validationCurr = ['usd', 'eur', 'rub', 'btc'];

    const dispatch = useDispatch();
    const {value, base, quote} = useSelector(({input}) => input);

    const [inputValue, setInputValue] = useState('');
    const [validInput, setValidInput] = useState(false);
    const [firstChange, setFirstChange] = useState(true);

    const handleChange = (event) => {
        setInputValue(event.target.value.toLowerCase().split(' '));
    };

    const enterKeyDown = (event) => {
        if (event.keyCode === 13) {

            setFirstChange(false);

            if (isNumber(inputValue[0])
                && validationCurr.includes(inputValue[1])
                && validationCurr.includes(inputValue[3])) {
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
        dispatch(fetchRate(base, quote));
    }, [value, base, quote]);

    return (
        <div>
            <input onChange={handleChange} onKeyDown={enterKeyDown} />
            {validInput && <p>valid</p>}
            {(!validInput && !firstChange) && <p>Input valid value please...</p>}
            {firstChange && <p>Input value please...</p>}
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
