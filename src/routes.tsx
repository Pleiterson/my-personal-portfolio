import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/home';
// import OrphanagesMap from './pages/OrphanagesMap';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                {/* <Route path="/app" component={OrphanagesMap}/> */}
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;