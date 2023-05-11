import React from 'react';
import Hero from "../Hero/hero";
import Circle from "../Circle/circle";
import Gallery from "../Gallery/gallery";
import Videos from "../Videos/videos";
import PhotosGym from "../Photos-Gym/photos-gym";

const Home = () => {
    return (
        <div>
            <Hero/>
            <Circle/>
            <Gallery/>
            <Videos/>
            <PhotosGym/>
        </div>
    );
};

export default Home;