import React from 'react';
import DescriptionOverview from './DescriptionOverview';
import Students from './Students';
import Teachers from './Teachers';
import Parents from './Parents';

class Description extends React.Component{
  render(){
    return(
      <div>
        <DescriptionOverview />
        <Students />
        <Teachers />
        <Parents />
      </div>
    )
  }
}

export default Description;
