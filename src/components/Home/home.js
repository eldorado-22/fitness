import React from 'react';
import Hero from "../Hero/hero";
import Circle from "../Circle/circle";
import Gallery from "../Gallery/gallery";
import Videos from "../Videos/videos";

const Home = () => {
    return (
        <div>
            <Hero/>
            <Circle/>
            <Gallery/>
            <Videos/>
        </div>
    );
};

export default Home;