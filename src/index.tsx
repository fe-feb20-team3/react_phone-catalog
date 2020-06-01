import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import './style/index.scss';
import store from './store';
import { App } from './App';
import { GoodsContextWrapper } from './components/Goods';

const Root = () => (
  <Provider store={store}>
    <GoodsContextWrapper>
      <HashRouter>
        <App />
      </HashRouter>
    </GoodsContextWrapper>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
