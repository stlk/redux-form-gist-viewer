import React from 'react';
import { Route } from 'react-router-dom';
import { Home, About, Gist } from './containers';

export default () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/gist/:id" component={Gist} />
      <Route path="/about" component={About} />
    </div>
  );
};
