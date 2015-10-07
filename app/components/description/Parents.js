import React from 'react';

class Parents extends React.Component{
  render(){
    return(
      <div>
        <div className="vertical grid-block description-title">
          <div className="grid-container">
            <h2> Print stories into beautiful books </h2>
          </div>
        </div>
        <div className="grid-container extra-margin-bottom">
          <div className="vertical medium-horizontal grid-block">
            <div className="medium-4 grid-block description-title">
              <div className="grid-content">
                <div className="storybook"></div>
              </div>
            </div>
            <div className="medium-8 grid-block description-title">
              <div className="align-center vertical grid-block">
                <p className="description-text-block">
                  StoryAppy helps writers produce incredible stories together.
                  We offer the ability to print these stories into beautiful books
                  that parents and students can keep forever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Parents;
