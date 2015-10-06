import React from 'react';

class Intro extends React.Component{
  render(){
    return(
      <div className="vertical grid-frame intro-block">
        <div className="intro-title">
          <div className="grid-content">
            <h1> A writing tool for the classroom</h1>
            <h1> to nurture our young writers</h1>
          </div>
          <div className="grid-container white-box">
            <div className="vertical medium-horizontal grid-block">
              <div className="grid-block">
                <p className="get-email-text"> StoryAppy is looking for schools to join a pilot program.  If you’re interested or if you would like to receive news about StoryAppy, please sign up. </p>
              </div>
              <div className="grid-block align-center">
                <form>
                  <div className="grid-block">
                    <div className="medium-8 grid-block">
              			  <input type="text" placeholder="Email Addresss" className="e-mail"/>
                    </div>
                    <div className="medium-4 grid-block">
              			  <a className="expand button submit-email" href="#">Submit</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-overlay"></div>
      </div>
    )
  }
}

export default Intro;
