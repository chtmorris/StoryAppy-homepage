import React from 'react';
import DescriptionOverview from './DescriptionOverview';
import CustomizationOverview from './CustomizationOverview';
import Students from './Students';
import Teachers from './Teachers';
import Parents from './Parents';
import Parallax from 'react-parallax';

class Description extends React.Component{
  render(){
    return(
      <div>
        <Parallax bgImage="img/parallaxOne.png" strength={200}></Parallax>
        <DescriptionOverview />
        <CustomizationOverview />
        <Parallax bgImage="img/parallaxTwo.png" strength={300}></Parallax>
        <Students />
        <Teachers />
        <Parents />
        <Parallax bgImage="img/parallaxThree.png" strength={300}></Parallax>
      </div>
    )
  }
}

export default Description;
