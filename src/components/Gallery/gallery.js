import React from 'react';
import "./style.scss";
import gymWoman from "./../../assets/images/service-1.jpg"
import man from "./../../assets/images/train.jpg"
import service from "./../../assets/images/service-3.jpg"
import services from "./../../assets/images/service-4.jpg"

const Gallery = () => {
    return (
        <section id="gallery" className="">
            <div className="container">
                <div className="gallery flex">
                    <div className="gallery--service1">
                        <img className="gallery--service1__one cursor-pointer" src={gymWoman} width={360} alt="img"/>
                        <h3 className="text-center">KRUHOVÉ <br/> TRÉNINKY</h3>
                        <div className="gallery--service1__block"></div>
                    </div>

                    <div className="gallery--service1">
                        <img className="gallery--service1__two" src={man} width={350} alt="img"/>
                        <h3 className="text-center">BOJOVÉ <br/> SPORTY</h3>
                        <div className="gallery--service1__block"></div>
                    </div>

                    <div className="gallery--service1">
                        <img className="gallery--service1__three" src={service} width={350} alt="img"/>
                        <h3 className="text-center">FITNESS <br/> JUMPING</h3>
                        <div className="gallery--service1__block"></div>
                    </div>

                    <div className="gallery--service1">
                        <img className="gallery--service1__four" src={services} width={350} alt="img"/>
                        <h3 className="text-center">KARDIO <br/> ZÓNA</h3>
                        <div className="gallery--service1__block"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;