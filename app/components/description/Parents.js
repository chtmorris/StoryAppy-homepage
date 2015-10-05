import React from 'react';

class Parents extends React.Component{
  render(){
    return(
      <div>
      <div className="vertical medium-horizontal grid-block students">
        <div className="medium-8 grid-block medium-order-2">
          <div className="vertical grid-block">
            <div className="grid-content align-center">
              <h2> Parents </h2>
            </div>
            <div className="grid-content align-center">
              <h3> Beautiful stories for families </h3>
            </div>
          </div>
        </div>
        <div className="medium-4 grid-content align-center medium-order-1">
          <img className="example-text-img" src="img/storybook.png" />
        </div>
      </div>
      <div className="section-break"><hr /></div>
      </div>
    )
  }
}

export default Parents;
