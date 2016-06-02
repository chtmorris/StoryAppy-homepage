import React from 'react';
import Scroll from 'react-scroll-no-reactdom-dependency';

var Link = Scroll.Link;

class NavBar extends React.Component{
  render(){
    return(

      <div className="primary title-bar">
        <div className="grid-block">
          <div className="medium-10 grid-block initial-positioning">
          <span className="left">
            <a href="/">
              <img src="img/StoryAppyLogoSmall.png" className="logo" />
              <span className="logo-text">StoryAppy</span>
            </a>
          </span>
          </div>
          <div className="medium-1 grid-block nav-links initial-positioning">
            <span className="right login-button">
              <Link to="login-section" spy={true} smooth={true} duration={2000}>
                Sign up
              </Link>
            </span>
          </div>
          <div className="medium-1 grid-block nav-links initial-positioning">
            <span className="right login-button">
              <a href="/#/SchoolLogin">
                Login
              </a>
            </span>
          </div>
        </div>
      </div>

    )
  }
}

export default NavBar;
