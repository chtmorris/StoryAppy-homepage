import React from 'react';

class Students extends React.Component{
  render(){
    return(
      <div className="description-block">
        <div className="vertical grid-block description-title">
          <div className="grid-container">
            <h2> ... students enjoyed the instant feedback</h2>
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
              <div className="align-center vertical grid-block">
                <p className="description-text-block">
                  Instead of waiting for a teacher to grade an assignment,
                  students are able to receive immediate feedback on their work.
                  This feedback ranges from spelling and grammar corrections,
                  to advice on the use of literary devices.
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
