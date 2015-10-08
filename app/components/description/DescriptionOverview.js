import React from 'react';

class DescriptionOverview extends React.Component{
  render(){
    return(
      <div className="description-block">
        <div className="vertical grid-block description-title">
          <div className="grid-container">
            <h2> ... it allowed students to write collaboratively with other</h2>
          </div>
        </div>
        <div className="grid-container">
          <div className="vertical medium-horizontal grid-block">
            <div className="grid-block description-title">
              <div className="vertical grid-block">
                <div className="vertical grid-content">
                  <h3> Students </h3>
                </div>
                <div className="grid-content">
                  <div className="boy"></div>
                </div>
              </div>
            </div>
            <div className="grid-block description-title">
              <div className="vertical grid-block">
                <div className="vertical grid-content">
                  <h3> Schools </h3>
                </div>
                <div className="grid-content">
                  <div className="school"></div>
                </div>
              </div>
            </div>
            <div className="grid-block description-title">
              <div className="vertical grid-block">
                <div className="vertical grid-content">
                  <h3> Countries </h3>
                </div>
                <div className="grid-content">
                  <div className="earth"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vertical grid-block">
          <div className="vertical grid-container">
            <p className="description-text-block intimidating-text">
               Writing can be intimidating for people of all ages.
               By allowing students to write together, StoryAppy makes writing collaborative, fun and engaging.
               Imagine your students writing with pen pals from all over the world!
            </p>
          </div>
        </div>
        <div className="grid-container">
        <div className="section-break"><hr /></div>
        </div>
      </div>
    )
  }
}

export default DescriptionOverview;
