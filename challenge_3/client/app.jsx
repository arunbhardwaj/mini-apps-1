import React from 'react';
import ReactDOM from 'react-dom';
/*
using CDN you don't need to import. In fact you can't use import
>>> import causing issues bc not using webpack
*/

ReactDOM.render(
  <div>extr hi world</div>,
  document.getElementById('app')
);