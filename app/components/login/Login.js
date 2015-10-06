import React from 'react';
import Footer from '../footer/Footer';
import Scroll from 'react-scroll';

var Element = Scroll.Element;

class Login extends React.Component{
  render(){
    return(
      <div className="login-section">
        <Element name="login-section">
        <div className="vertical grid-block login-full-height">
          <div className="login-text-block">
            <div className="grid-block align-center">
              <h2 className="login-title"> Login </h2>
            </div>
            <div className="grid-block align-center">
          		<form className="login-form">
          			<input type="text" placeholder="Username" className="username"/>
          			<input type="password" placeholder="Password" />
          			<a className="expand button" href="#">Login</a>
          		</form>
            </div>
          </div>
          <Footer />
          <div className="login-overlay"></div>
        </div>
      </Element>
      </div>
    )
  }
}

export default Login;
