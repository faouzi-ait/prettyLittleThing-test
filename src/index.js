import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Home from './components/Home';
import Details from './components/Details';
import Basket from './components/Basket';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import { store } from './redux/store';
import { persistor } from './redux/store';

import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/details/:id" component={Details} />
            <Route exact path="/cart" component={Basket} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
