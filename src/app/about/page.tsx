import React from 'react';
import AboutSlider from '@/components/AboutSlider';
import { MyDetails } from '@/components/AboutData';

const About = () => {
  return (
      <div className="px-6 py-10 mt-20 md:px-20 lg:px-36">

        {/* About Me Section */}
       <AboutSlider  abtitems={MyDetails}/>
      </div>
  );
};

export default About;
