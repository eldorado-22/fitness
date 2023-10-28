import React from 'react';
import Hero from "../Hero/hero";
import Circle from "../Circle/circle";
import Gallery from "../Gallery/gallery";
import Videos from "../Videos/videos";
import PhotosGym from "../Photos-Gym/photos-gym";

const Home = () => {
    window.scroll(0, 0)

    return (
        <>
            <Hero/>
            <Circle/>
            <Gallery/>
            <Videos/>
            <PhotosGym/>
        </>
    );
};

export default Home;