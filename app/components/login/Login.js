import React from 'react';
import Footer from '../footer/Footer';

class Login extends React.Component{
  render(){
    return(
      <div className="login-section">
        <div className="vertical grid-block">
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
          <div className="bottom-overlay"></div>
        </div>
      </div>
    )
  }
}

export default Login;
