import 'babel-polyfill';
import 'fastclick';
import 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import '../styles/main.scss';
import configureStore from './store/configureStore';
import App from './containers/App';
import SongsContainer from './containers/SongsContainer';
import SongContainer from './containers/SongContainer';
import UserContainer from './containers/UserContainer';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SongsContainer} />
        <Route path="songs/:id" component={SongContainer} />
        <Route path="users" component={UserContainer} />
        <Route path="users/:userId" component={UserContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
