import React from 'react';

class Students extends React.Component{
  render(){
    return(
      <div className="vertical medium-horizontal grid-block students">
        <div className="medium-8 grid-block medium-order-2">
          <div className="vertical grid-block">
            <div className="grid-content align-center">
              <h2> Students </h2>
            </div>
            <div className="grid-content align-center">
              <h3> Editing tools for self learning & faster improvement </h3>
            </div>
          </div>
        </div>
        <div className="medium-4 grid-content align-center medium-order-1">
          <img className="example-text-img" src="img/example-text.png" />
        </div>
      </div>
    )
  }
}

export default Students;
