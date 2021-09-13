import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp'

ReactDOM.render(
  <React.StrictMode>
    <CounterApp value={10}/>
  </React.StrictMode>,
  document.getElementById('root')
);
