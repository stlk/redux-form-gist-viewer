import React from 'react';
import { Route } from 'react-router-dom';
import {
    Home,
    About,
    NotFound
  } from './containers';

export default () => {

  return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  );
};
