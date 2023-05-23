import React, {} from 'react';
import "./style.scss";

const Hero = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // };'


    return (
        <section id="hero" className="">
            <div className="container">
                <div style={{
                    backdropFilter: "blur(2px)",
                    minHeight: "100vh"
                }} className="hero pt-[14%] filter-[1px] flex  items-center flex-col">
                    <img className="w-[17%] pb-10 flex justify-center" src="https://fitnessluka.cz/templates/Default/images/animated-logo.svg" alt="img"/>
                    <h1 className="text text-7xl text-amber-50 text-center">Welcome To
                        <span className="text text-red-600"> GYM FITNESS</span>
                    </h1>
                   <p className="text-2xl text-opacity-70 text-amber-50 text-center py-7">Lorem ipsum dolor sit amet. Accusantium assumenda eum
                       facilis harum, <br/> laboriosam molestias nobis. Magnam, sequi similique?
                   </p>
                    <button className="custom-btn btn-5 outline-none"><span>Sign Up</span></button>
                </div>
            </div>
        </section>
    );
};

export default Hero;