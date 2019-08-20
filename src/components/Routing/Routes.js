import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './../../App';
import About from '../Main/About';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" exact component={App} />
      </Switch>
    </BrowserRouter>
  );
}


export default Routes;
