import React from 'react';

class Intro extends React.Component{
  render(){
    return(
      <div className="vertical medium-horizontal grid-block intro-block">

        <div className="medium-6 grid-content">
          <div className="vertical grid-block">
            <div className="grid-block align-center intro-headline">
              <h1 className="intro-headline-text"> Collaborative Writing For The Classroom </h1>
            </div>
            <div className="grid-block align-center">
              <iframe width="400" height="250" src="https://www.youtube.com/embed/oODsZ9cbWPM" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </div>

        <div className="medium-6 grid-content right-intro-block">
          <div className="top-right-image"></div>
        </div>

      </div>
    )
  }
}

export default Intro;
