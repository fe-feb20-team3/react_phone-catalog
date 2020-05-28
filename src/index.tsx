import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import { App } from './App';
import { GoodsContextWrapper } from './components/Goods';

ReactDOM.render(
  <GoodsContextWrapper>
    <HashRouter>
      <App />
    </HashRouter>
  </GoodsContextWrapper>,
  document.getElementById('root'),
);
