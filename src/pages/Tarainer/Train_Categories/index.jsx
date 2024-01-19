import React from 'react';
import "./style.scss";
import train from "../../../assets/images/train_2.jpg"
import gymWoman from "../../../assets/images/service-1.jpg";
import man from "../../../assets/images/train.jpg";
import service from "../../../assets/images/service-3.jpg";
import services from "../../../assets/images/service-4.jpg";

const TrainCategory = () => {
    return (<>
        <div id="category">
            <div className="container">
                <div className="category">
                    <div className="category--title pb-3">
                        <h1 className="text-red-700 text-6xl font-extrabold text-center">
                            Train
                            <span className="font-extrabold text-gray-50 ">
                            Category
                        </span>
                        </h1>
                    </div>
                    <div className="category--group">
                        <div id="gallery" className="">
                            <div className="gallery flex items-center justify-center">
                                <div className="gallery--service1">
                                    <img className="gallery--service1__one cursor-pointer" src={gymWoman} width={360}
                                         alt="img"/>
                                    <h3 className="text-center">KRUHOVÉ <br/> TRÉNINKY</h3>
                                    <div className="gallery--service1__block"></div>
                                    <div className="gallery--service1__modal">
                                        <p>Биомеханика физических упражнений. Спортивная гигиена </p>
                                    </div>
                                </div>
                                <div className="gallery--service1">
                                    <img className="gallery--service1__one" src={man} width={350} alt="img"/>
                                    <h3 className="text-center">BOJOVÉ <br/> SPORTY</h3>
                                    <div className="gallery--service1__block"></div>
                                    <div className="gallery--service1__modal">
                                        <p>Функциональная тренировка </p>
                                    </div>
                                </div>
                                <div className="gallery--service1">
                                    <img className="gallery--service1__one" src={service} width={350} alt="img"/>
                                    <h3 className="text-center">FITNESS <br/> JUMPING</h3>
                                    <div className="gallery--service1__block"></div>
                                    <div className="gallery--service1__modal">
                                        <p>	Тренировка гибкости (стретчинг) </p>
                                    </div>
                                </div>
                                <div className="gallery--service1">
                                    <img className="gallery--service1__one" src={services} width={350} alt="img"/>
                                    <h3 className="text-center">KARDIO <br/> ZÓNA</h3>
                                    <div className="gallery--service1__block"></div>
                                    <div className="gallery--service1__modal">
                                        <p> Аэробная тренировка </p>
                                    </div>
                                </div>
                            </div>
                            <div className="gallery flex items-center justify-center">
                                <div className="gallery--service1">
                                    <img className="gallery--service1__one cursor-pointer" src={gymWoman} width={360}
                                         alt="img"/>
                                    <h3 className="text-center">KRUHOVÉ <br/> TRÉNINKY</h3>
                                    <div className="gallery--service1__block"></div>
                                    <div className="gallery--service1__modal">
                                        <p>Биомеханика физических упражнений. Спортивная гигиена </p>
                                    </div>
                                </div>
                                <div className="gallery--service1">
                                    <img className="gallery--service1__one" src={man} width={350} alt="img"/>
                                    <h3 className="text-center">BOJOVÉ <br/> SPORTY</h3>
                                    <div className="gallery--service1__block"></div>
                                    <div className="gallery--service1__modal">
                                        <p>Функциональная тренировка </p>
                                    </div>
                                </div>
                                <div className="gallery--service1">
                                    <img className="gallery--service1__one" src={train} width={350} alt="img"/>
                                    <h3 className="text-center">FITNESS <br/> JUMPING</h3>
                                    <div className="gallery--service1__block"></div>
                                    <div className="gallery--service1__modal">
                                        <p>	Тренировка гибкости (стретчинг) </p>
                                    </div>
                                </div>
                                <div className="gallery--service1">
                                    <img className="gallery--service1__one" src={services} width={350} alt="img"/>
                                    <h3 className="text-center">KARDIO <br/> ZÓNA</h3>
                                    <div className="gallery--service1__block"></div>
                                    <div className="gallery--service1__modal">
                                        <p> Аэробная тренировка </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
};

export default TrainCategory;