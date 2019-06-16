import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { hot } from 'react-hot-loader';

export default hot(module)(App);

ReactDOM.render(<App />, document.getElementById('root'));
