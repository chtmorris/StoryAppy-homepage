import React from 'react';

class Teachers extends React.Component{
  render(){
    return(
      <div>
        <div className="vertical grid-block description-title">
          <div className="grid-container">
            <h2> ... teachers loved the analytics</h2>
          </div>
        </div>
        <div className="grid-container">
          <div className="vertical medium-horizontal grid-block">
            <div className="medium-4 medium-order-2 grid-block description-title">
              <div className="grid-content">
                <div className="graph"></div>
              </div>
            </div>
            <div className="medium-8 medium-order-1 grid-block description-title">
              <div className="align-center vertical grid-block">
                <p className="description-text-block">
                  We keep track of all student data and present this data graphically to you the teacher.
                  Using our analytics tools, you can easily assess student progress and generate
                  literacy reports for each student.
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

export default Teachers;
