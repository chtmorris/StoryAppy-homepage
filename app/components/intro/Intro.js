import React from 'react';
import Parse from 'parse';
import Signup from '../signUpBox/Signup';

class Intro extends React.Component{
  render(){
    return(
      <div className="align-right vertical grid-block intro-block shadow">
        <div className="intro-content">
          <div className="grid-block intro-title">
            <div className="grid-content">
              <h1> Once upon a time, there was a magical story writing app...
              </h1>
            </div>
          </div>
          <Signup />
        </div>
        <div className="bottom-overlay"></div>
      </div>
    )
  }
}

export default Intro;
