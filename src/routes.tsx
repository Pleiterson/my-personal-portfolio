import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import Curriculo from './pages/curriculo';
import Contatos from './pages/contatos';
import Projetos from './pages/projetos';
import Sobre from './pages/sobre';
import Detalhes from './pages/detalhes';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/curriculo" component={Curriculo}/>
                <Route path="/contatos" component={Contatos}/>
                <Route path="/projetos" component={Projetos}/>
                <Route path="/sobre" component={Sobre}/>
                <Route path="/detalhes" component={Detalhes}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;