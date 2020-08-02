import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './components/pages/cadastro/Video';
import CadastroCategoria from './components/pages/cadastro/Categoria';

//desafio: retornar uma página mais interessante no 404
const Pagina404 = () => {return <div>Página não encontrada</div>};


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route component={Pagina404} />
    </Switch>

  </BrowserRouter>,
  document.getElementById('root')
);
