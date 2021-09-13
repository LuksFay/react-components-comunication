import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value = 10}) => {
    const [counter, setCounter] = useState(value);
   
   const handleAdd = () => {
       setCounter(counter + 1);
   }
   const handleReset = () => {
       setCounter(value);
   }
   const handleQuit = () => {
       setCounter(counter - 1);
   }
   
    return (
        <>
            <h1>CounterAPP</h1>
            <h2>{value}</h2>

            <button onClick ={handleAdd}>+1</button>
            <button onClick ={handleReset}>Reset</button>
            <button onClick ={handleQuit}>-1</button>
        </>
    )
}

CounterApp.propTypes={
    value: PropTypes.number
}

export default CounterApp