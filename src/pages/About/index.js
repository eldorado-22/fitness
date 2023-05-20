import React from 'react';
import Text from "./Text/Text";
import About from "./Hero/about";
import AboutPhotoGYM from "./About-Photo-GYM";
import FitnessInformation from "./Fitness-Information";
import Contact from "./Contact/Contact";

const AboutUS = () => {
    return (
        <div>
            <About/>
            <Text/>
            <AboutPhotoGYM/>
            <FitnessInformation/>
            <Contact/>
        </div>
    );
};

export default AboutUS;