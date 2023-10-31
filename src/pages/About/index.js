import React from 'react';
import Text from "./Text/Text";
import About from "./Hero/about";
import AboutPhotoGYM from "./About-Photo-GYM";
import Contact from "./Contact/Contact";

const AboutUS = () => {
    window.scroll(100,0)

    return (
        <div>
            <About/>
            <Text/>
            <AboutPhotoGYM/>
            <Contact/>
        </div>
    );
};

export default AboutUS;