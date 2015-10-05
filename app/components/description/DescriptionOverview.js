import React from 'react';

class DescriptionOverview extends React.Component{
  render(){
    return(
      <div>
        <div className="vertical grid-content description-title">
          <h1> Collaborative writing between </h1>
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
      <div className="section-break"><hr /></div>
      </div>
    )
  }
}

export default DescriptionOverview;
