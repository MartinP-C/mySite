import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Header from './components/Header.jsx';
import IndexPage from './pages/indexPage.jsx';
import SkillsPage from './pages/skillsPage.jsx';
import Footer from './components/Footer';
import Layout from './Layout';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import styles from '../styles/core.scss';


render( 
  <AppContainer>
    <Router>
        <Layout>
          <Route exact path="/" component={IndexPage} />
          <Route path="/skills" component={SkillsPage} />
        </Layout>
      </Router>
  </AppContainer>,
document.querySelector("#app"));

if (module && module.hot) {
  module.hot.accept('./pages/indexPage.jsx', () => {
    const App = require('./pages/indexPage.jsx').default;
    render(
      <AppContainer>
    <Router>
        <Layout>
          <Route exact path="/" component={IndexPage} />
          <Route path="/skills" component={SkillsPage} />
        </Layout>
      </Router>
      </AppContainer>,
      document.querySelector("#app")
    );
  });
}
