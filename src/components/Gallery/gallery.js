import React from 'react';
import "./style.scss";
import gymWoman from "./../../assets/images/service-1.jpg"
import man from "./../../assets/images/train.jpg"
import service from "./../../assets/images/service-3.jpg"
import services from "./../../assets/images/service-4.jpg"

const Gallery = () => {
    return (
        <section id="gallery" className="">
                <div className="gallery flex flex-wrap items-center justify-center">
                    <div className="gallery--service1">
                        <img className="gallery--service1__one cursor-pointer" src={gymWoman} width={360} alt="img"/>
                        <h3 className="text-center">KRUHOVÉ <br/> TRÉNINKY</h3>
                        <div className="gallery--service1__block"></div>
                    </div>
                    <div className="gallery--service1">
                        <img className="gallery--service1__one" src={man} width={350} alt="img"/>
                        <h3 className="text-center">BOJOVÉ <br/> SPORTY</h3>
                        <div className="gallery--service1__block"></div>
                    </div>
                    <div className="gallery--service1">
                        <img className="gallery--service1__one" src={service} width={350} alt="img"/>
                        <h3 className="text-center">FITNESS <br/> JUMPING</h3>
                        <div className="gallery--service1__block"></div>
                    </div>
                    <div className="gallery--service1">
                        <img className="gallery--service1__one" src={services} width={350} alt="img"/>
                        <h3 className="text-center">KARDIO <br/> ZÓNA</h3>
                        <div className="gallery--service1__block"></div>
                    </div>
                </div>
        </section>
    );
};

export default Gallery;