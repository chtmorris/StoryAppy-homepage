import React from 'react';
import NavBar from './navbar/NavBar';
import Intro from './intro/Intro';
import Description from './description/Description';
import Login from './login/Login';
import Footer from './footer/Footer';

class Home extends React.Component{
  render() {
    return (
      <div>
        <NavBar />
        <Intro />
        <Description />
        <Login />
      </div>
    )
  }
}

export default Home;
