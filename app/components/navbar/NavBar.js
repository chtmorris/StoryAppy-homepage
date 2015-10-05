import React from 'react';

class NavBar extends React.Component{
  render(){
    return(

      <div className="primary title-bar">
        <div className="grid-block">
          <div className="medium-11 grid-block">
          <span className="left">
            <img src="img/StoryAppyLogoSmall.png" className="logo" />
            <span className="logo-text">StoryAppy</span>
          </span>
          </div>
          <div className="medium-1 grid-block nav-links">
            <span className="right"><a href="#">Sign in</a></span>
          </div>
        </div>
      </div>

    )
  }
}

export default NavBar;
