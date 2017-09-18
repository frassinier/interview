import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import brands from './db/brands';
import phones from './db/phones';

const data = { brands, phones};

ReactDOM.render(
  <App data={data}/>,
  document.getElementById('root')
);
