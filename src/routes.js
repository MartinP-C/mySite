import React from 'react';

import { Router, Route, hashHistory } from 'react-router';
import indexPage from './pages/indexPage.jsx';
import skillsPage from './pages/skillsPage.jsx';

<Router history={hashHistory}>
    <Route path="/" component={indexPage} />
    <Route path="/skills" component={skillsPage} />
</Router>