import React from 'react';
import './App.less';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BasicLayout from './components/Layout';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <Route path="/" component={BasicLayout as any} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
