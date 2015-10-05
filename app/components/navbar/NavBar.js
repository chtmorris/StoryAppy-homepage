import React from 'react';

class NavBar extends React.Component{
  render(){
    return(

      <div className="primary title-bar">
        <div className="grid-block">
          <div className="medium-9 grid-block">
          <span className="left">
            <img src="img/StoryAppyLogoSmall.png" className="logo" />
            <span className="logo-text">StoryAppy</span>
          </span>
          </div>
          <div className="medium-1 grid-block nav-links">
            <span className="center"><a href="#">About</a></span>
          </div>
          <div className="medium-1 grid-block nav-links">
            <span className="center"><a href="#">Login</a></span>
          </div>
          <div className="medium-1 grid-block nav-links">
            <span className="center"><a href="#">Contact</a></span>
          </div>
        </div>
      </div>

    )
  }
}

export default NavBar;
