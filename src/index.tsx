import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.less';
import { hot } from 'react-hot-loader';
import { MemoryRouter } from 'react-router-dom';

export default hot(module)(App);

ReactDOM.render(
  <MemoryRouter>
    <App />
  </MemoryRouter>,
  document.getElementById('root')
);
