import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home';
import Contato from '../pages/contato';
import Viacep from '../pages/viacep';
import Novo from '../pages/novo';
import Sugestion from '../pages/sugestion';
import Result from '../pages/result';

// import { Container } from './styles';

const routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/contato" exact>
        <Contato />
      </Route>
      <Route path="/viacep" exact>
        <Viacep />
      </Route>
      <Route path="/novo" exact>
        <Novo />
      </Route>
      <Route path="/sugestion" exact>
        <Sugestion />
      </Route>
      <Route path="/result" exact>
        <Result />
      </Route>
    </Switch>
  );
};

export default routes;
