import React from 'react';

class DescriptionOverview extends React.Component{
  render(){
    return(
      <div className="first-description-block">
        <div className="vertical grid-block description-title">
          <div className="grid-container">
            <h1> Increase engagement through collaborative writing between...</h1>
          </div>
        </div>
        <div className="vertical medium-horizontal grid-block">
          <div className="grid-block description-title">
            <div className="vertical grid-block">
              <div className="vertical grid-content">
                <h2> Students </h2>
              </div>
              <div className="grid-content">
                <div className="boy"></div>
              </div>
            </div>
          </div>
          <div className="grid-block description-title">
            <div className="vertical grid-block">
              <div className="vertical grid-content">
                <h2> Schools </h2>
              </div>
              <div className="grid-content">
                <div className="school"></div>
              </div>
            </div>
          </div>
          <div className="grid-block description-title">
            <div className="vertical grid-block">
              <div className="vertical grid-content">
                <h2> Countries </h2>
              </div>
              <div className="grid-content">
                <div className="earth"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="vertical grid-block">
          <div className="vertical grid-container">
            <p className="description-text-first-block">
               Writing can be intimidating for students but if students write together,
               it can make writing fun and they can learn to love writing.
               Imagine your students writing with pen pals from all over the world!
            </p>
          </div>
        </div>
        <div className="section-break"><hr /></div>
      </div>
    )
  }
}

export default DescriptionOverview;
