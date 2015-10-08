import React from 'react';
import Footer from '../footer/Footer';
import Scroll from 'react-scroll';
import Signup from '../signUpBox/Signup';

var Element = Scroll.Element;

class Login extends React.Component{
  render(){
    return(
      <div className="login-section">
        <Element name="login-section">
        <div className="align-center vertical grid-block login-full-height shadow">
          <div className="login-text-block">
            <div className="grid-block align-center">
              <h2 className="login-title"> And its name was... </h2>
            </div>
            <div className="grid-block align-center">
              <Signup />
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
