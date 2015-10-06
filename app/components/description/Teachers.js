import React from 'react';
import Analytics from './Analytics'

class Teachers extends React.Component{
  render(){
    return(
      <div>
        <div className="vertical grid-block description-title">
          <div className="grid-container">
            <h2> Keep track of student progress through custom analytics</h2>
          </div>
        </div>
        <div className="grid-container">
          <div className="vertical medium-horizontal grid-block">
            <div className="medium-8 grid-block description-title">
              <div className="vertical grid-content">
                <p className="description-text-block">
                  Instead of waiting for a teacher to grade an assignment,
                  students are able to get immediate feedback on their work.
                </p>
              </div>
            </div>
            <div className="medium-4 grid-block description-title">
              <div className="grid-content">
                <div className="graph"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-container">
        <div className="section-break"><hr /></div>
        </div>
      </div>
    )
  }
}

export default Teachers;
