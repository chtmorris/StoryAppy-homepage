import React from 'react';
import Main from '../components/Main'
import Home from '../components/Home'
import SchoolLogin from '../components/SchoolLogin'

import { Router, Route, DefaultRoute } from 'react-router';

export default (
  <Route name="app" path="/" handler={Main}>
    <Route name="" handler={Home}/>
    <Route name="SchoolLogin" handler={SchoolLogin}/>
  </Route>
)
