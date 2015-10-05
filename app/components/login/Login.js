import React from 'react';

class Login extends React.Component{
  render(){
    return(
      <div className="vertical grid-block">
        <div className="grid-block align-center">
          <h2> Login </h2>
        </div>
        <div className="grid-block align-center">
      		<form className="login-form">
      			<input type="text" placeholder="Username" className="username"/>
      			<input type="password" placeholder="Password" />
      			<a className="expand button" href="#">Login</a>
      		</form>
        </div>
      </div>
    )
  }
}

export default Login;
