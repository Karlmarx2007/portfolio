import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './../../App';
import About from '../Main/About';
import Work from '../Main/Work';
import Contact from '../Main/Contact';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/contact" component={ Contact } />
        <Route path="/work" component={ Work } />
        <Route path="/about" component={ About } />
        <Route path="/" exact component={ App } />
      </Switch>
    </BrowserRouter>
  );
}


export default Routes;
