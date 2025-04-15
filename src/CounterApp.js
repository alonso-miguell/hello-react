import PropTypes from 'prop-types';
import { useState } from 'react';


export const CounterApp= ({value}) =>{
    const[counter, setCounter] = useState(value);

    const handleClick= () => setCounter(counter+1);
    const handleSubstract= () => setCounter(counter-1);
    const handleReset= () => setCounter(value);

    return (
    <>
        <h1> CounterApp </h1>
        <h2 data-testid='counter'> Current value: {counter} </h2>
        <button onClick={ handleClick }> PLUS !</button>
        <button onClick={ handleSubstract }> SUBSTRACT !</button>
        <button onClick={ handleReset }> RESET !</button>
    </>);
    

};


CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps= {
    value: 30
}