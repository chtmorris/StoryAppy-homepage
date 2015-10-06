import React from 'react';
import DescriptionOverview from './DescriptionOverview';
import Students from './Students';
import Teachers from './Teachers';
import Parents from './Parents';
import Parallax from 'react-parallax';

class Description extends React.Component{
  render(){
    return(
      <div>
        <Parallax bgImage="img/parallaxOne.png" strength={500}>
        </Parallax>
        <DescriptionOverview />
        <Students />
        <Teachers />
        <Parents />
      </div>
    )
  }
}

export default Description;
