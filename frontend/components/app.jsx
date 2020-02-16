import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Splash from './splash_container';
import Requests from './requests_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact={true} path='/' component={Splash} />
            <ProtectedRoute exact={true} path='/requests' component={Requests} />
        </Switch>
    </div>
);

export default App;
