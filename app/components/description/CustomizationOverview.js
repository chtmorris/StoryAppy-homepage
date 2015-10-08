import React from 'react';

class CustomizationOverview extends React.Component{
  render(){
    return(
      <div>
        <div className="vertical grid-block description-title">
          <div className="grid-container">
            <h2> ... teachers loved how easy it was to customise</h2>
          </div>
        </div>
        <div className="grid-container extra-padding-bottom">
          <div className="vertical medium-horizontal grid-block">
            <div className="medium-4 grid-block description-title">
              <div className="grid-content">
                <div className="customise"></div>
              </div>
            </div>
            <div className="medium-8 grid-block description-title">
              <div className="align-center vertical grid-block">
                <p className="description-text-block">
                  We make it possible for teachers to pick different modes of collaboration
                  so that students won’t get bored with the same assignments and will
                  remain engaged in creative writing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CustomizationOverview;
