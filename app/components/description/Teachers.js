import React from 'react';
import Analytics from './Analytics'

class Teachers extends React.Component{
  render(){
    return(
      <div className="vertical medium-horizontal grid-block students">
        <div className="medium-6 grid-block ">
          <div className="vertical grid-block">
            <div className="grid-content align-center">
              <h2> Teachers </h2>
            </div>
            <div className="grid-content align-center">
              <h3> Keep track of student progress with custom analytics </h3>
            </div>
          </div>
        </div>
        <div className="medium-6 grid-content align-center">
          <Analytics />
        </div>
      </div>
    )
  }
}

export default Teachers;
