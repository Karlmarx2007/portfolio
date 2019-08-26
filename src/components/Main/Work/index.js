import React from 'react';
import HeaderIner from '../../Header/HeaderIner';
import WorkA from './WorkA';
import Footer from '../../Footer/Footer';

const Work = () => {
  return (
    <div>
      {/*current would be used to style Work when selected on MainNavBar*/}
      <HeaderIner work='current'/>
      {<WorkA />}
      <Footer />
    </div>
  );
}

export default Work;
