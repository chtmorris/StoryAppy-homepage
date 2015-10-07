import React from 'react';
import { RouteHandler } from 'react-router';
import { Parse } from 'parse';
import secrets from '../config/secrets';

Parse.initialize(secrets.parse.applicationId, secrets.parse.javascriptKey);

class Main extends React.Component{
  render() {
    return(
      <RouteHandler />
    )
  }
}

export default Main;
