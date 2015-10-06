import React from 'react';

class Students extends React.Component{
  render(){
    return(
      <div>
        <div className="vertical grid-block description-title">
          <div className="grid-container">
            <h2> Editing tools for self learning & faster improvement</h2>
          </div>
        </div>
        <div className="grid-container">
          <div className="vertical medium-horizontal grid-block">
            <div className="medium-4 grid-block description-title">
              <div className="grid-content">
                <div className="word-checker"></div>
              </div>
            </div>
            <div className="medium-8 grid-block description-title">
              <div className="vertical grid-content">
                <p className="description-text-block">
                  Instead of waiting for a teacher to grade an assignment,
                  students are able to get immediate feedback on their work.
                </p>
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

export default Students;
