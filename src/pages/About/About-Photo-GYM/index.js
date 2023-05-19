import React from 'react';
// import "./style.scss";
import "./../../../components/Photos-Gym/styles.scss"
import photoSix from "../../../assets/images/gallery6.jpg";
import photoEleven from "../../../assets/images/gallery12.jpg";
import photoEight from "../../../assets/images/gallery7.jpg";
import photoNine from "../../../assets/images/gallery9.jpg";
import photoTen from "../../../assets/images/gallery10.jpg";
import photoOne from "../../../assets/images/gallery1.jpg";
import photoTwo from "../../../assets/images/gallery2.jpg";
import photoThree from "../../../assets/images/gallery3.jpg";
import photoFour from "../../../assets/images/gallery4.jpg";
import photoFive from "../../../assets/images/gallery5.jpg";

const AboutPhotoGYM = () => {
    return (
        <div id="photos">
            <div className="container">
                <h2 className="text-gray-50 text-6xl text-center ">Photos <span className="font-bold text-red-700 py-3">GYM</span></h2>
                <div className="photos py-3">
                    <div className=" flex  justify-between items-center">
                        <article className="card">
                            <div className="card__inner">
                                <div className="card__side card__side--front">
                                    <img className="card__image" src={photoSix} alt="img"/>
                                    <div className="card__body card__body--flex">
                                        <h2 className="card__title">Eldar JM</h2>
                                        <span className="card__arrow">&rarr;</span>
                                    </div>
                                </div>
                                <div className="card__side card__side--back">
                                    <div className="card__body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores neque
                                            repellat
                                            voluptates.</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="card">
                            <div className="card__inner">
                                <div className="card__side card__side--front">
                                    <img className="card__image" src={photoEleven} alt="img"/>
                                    <div className="card__body card__body--flex">
                                        <h2 className="card__title">Eldar JM</h2>
                                        <span className="card__arrow">&rarr;</span>
                                    </div>
                                </div>
                                <div className="card__side card__side--back">
                                    <div className="card__body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores neque
                                            repellat
                                            voluptates.</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="card">
                            <div className="card__inner">
                                <div className="card__side card__side--front">
                                    <img className="card__image" src={photoEight} alt="img"/>
                                    <div className="card__body card__body--flex">
                                        <h2 className="card__title">Eldar JM</h2>
                                        <span className="card__arrow">&rarr;</span>
                                    </div>
                                </div>
                                <div className="card__side card__side--back">
                                    <div className="card__body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores neque
                                            repellat
                                            voluptates.</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="card">
                            <div className="card__inner">
                                <div className="card__side card__side--front">
                                    <img className="card__image" src={photoNine} alt="img"/>
                                    <div className="card__body card__body--flex">
                                        <h2 className="card__title">Eldar JM</h2>
                                        <span className="card__arrow">&rarr;</span>
                                    </div>
                                </div>
                                <div className="card__side card__side--back">
                                    <div className="card__body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores neque
                                            repellat
                                            voluptates.</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="card">
                            <div className="card__inner">
                                <div className="card__side card__side--front">
                                    <img className="card__image" src={photoTen} alt="img"/>
                                    <div className="card__body card__body--flex">
                                        <h2 className="card__title">Eldar JM</h2>
                                        <span className="card__arrow">&rarr;</span>
                                    </div>
                                </div>
                                <div className="card__side card__side--back">
                                    <div className="card__body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores neque
                                            repellat
                                            voluptates.</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="flex py-7  justify-between items-center">
                        <article className="card">
                            <div className="card__inner">
                                <div className="card__side card__side--front">
                                    {/*<div className="card__image-wrapper">*/}
                                    <img className="card__image" src={photoOne} alt="img"/>
                                    {/*</div>*/}
                                    <div className="card__body card__body--flex">
                                        <h2 className="card__title">Eldar JM</h2>
                                        <span className="card__arrow">&rarr;</span>
                                    </div>
                                </div>
                                <div className="card__side card__side--back">
                                    <div className="card__body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores neque
                                            repellat
                                            voluptates.</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="card">
                            <div className="card__inner">
                                <div className="card__side card__side--front">
                                    {/*<div className="card__image-wrapper">*/}
                                    <img className="card__image" src={photoTwo} alt="img"/>
                                    {/*</div>*/}
                                    <div className="card__body card__body--flex">
                                        <h2 className="card__title">Eldar JM</h2>
                                        <span className="card__arrow">&rarr;</span>
                                    </div>
                                </div>
                                <div className="card__side card__side--back">
                                    <div className="card__body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores neque
                                            repellat
                                            voluptates.</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="card">
                            <div className="card__inner">
                                <div className="card__side card__side--front">
                                    {/*<div className="card__image-wrapper">*/}
                                    <img className="card__image" src={photoThree} alt="img"/>
                                    {/*</div>*/}
                                    <div className="card__body card__body--flex">
                                        <h2 className="card__title">Eldar JM</h2>
                                        <span className="card__arrow">&rarr;</span>
                                    </div>
                                </div>
                                <div className="card__side card__side--back">
                                    <div className="card__body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores neque
                                            repellat
                                            voluptates.</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="card">
                            <div className="card__inner">
                                <div className="card__side card__side--front">
                                    {/*<div className="card__image-wrapper">*/}
                                    <img className="card__image" src={photoFour} alt="img"/>
                                    {/*</div>*/}
                                    <div className="card__body card__body--flex">
                                        <h2 className="card__title">Eldar JM</h2>
                                        <span className="card__arrow">&rarr;</span>
                                    </div>
                                </div>
                                <div className="card__side card__side--back">
                                    <div className="card__body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores neque
                                            repellat
                                            voluptates.</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="card">
                            <div className="card__inner">
                                <div className="card__side card__side--front">
                                    {/*<div className="card__image-wrapper">*/}
                                    <img className="card__image" src={photoFive} alt="img"/>
                                    {/*</div>*/}
                                    <div className="card__body card__body--flex">
                                        <h2 className="card__title">Eldar JM</h2>
                                        <span className="card__arrow">&rarr;</span>
                                    </div>
                                </div>
                                <div className="card__side card__side--back">
                                    <div className="card__body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores neque
                                            repellat
                                            voluptates.</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="flex    justify-between items-center">
                        <article className="card">
                            <div className="card__inner">
                                <div className="card__side card__side--front">
                                    {/*<div className="card__image-wrapper">*/}
                                    <img className="card__image" src={photoOne} alt="img"/>
                                    {/*</div>*/}
                                    <div className="card__body card__body--flex">
                                        <h2 className="card__title">Eldar JM</h2>
                                        <span className="card__arrow">&rarr;</span>
                                    </div>
                                </div>
                                <div className="card__side card__side--back">
                                    <div className="card__body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores neque
                                            repellat
                                            voluptates.</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="card">
                            <div className="card__inner">
                                <div className="card__side card__side--front">
                                    {/*<div className="card__image-wrapper">*/}
                                    <img className="card__image" src={photoTwo} alt="img"/>
                                    {/*</div>*/}
                                    <div className="card__body card__body--flex">
                                        <h2 className="card__title">Eldar JM</h2>
                                        <span className="card__arrow">&rarr;</span>
                                    </div>
                                </div>
                                <div className="card__side card__side--back">
                                    <div className="card__body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores neque
                                            repellat
                                            voluptates.</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="card">
                            <div className="card__inner">
                                <div className="card__side card__side--front">
                                    {/*<div className="card__image-wrapper">*/}
                                    <img className="card__image" src={photoThree} alt="img"/>
                                    {/*</div>*/}
                                    <div className="card__body card__body--flex">
                                        <h2 className="card__title">Eldar JM</h2>
                                        <span className="card__arrow">&rarr;</span>
                                    </div>
                                </div>
                                <div className="card__side card__side--back">
                                    <div className="card__body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores neque
                                            repellat
                                            voluptates.</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="card">
                            <div className="card__inner">
                                <div className="card__side card__side--front">
                                    {/*<div className="card__image-wrapper">*/}
                                    <img className="card__image" src={photoFour} alt="img"/>
                                    {/*</div>*/}
                                    <div className="card__body card__body--flex">
                                        <h2 className="card__title">Eldar JM</h2>
                                        <span className="card__arrow">&rarr;</span>
                                    </div>
                                </div>
                                <div className="card__side card__side--back">
                                    <div className="card__body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores neque
                                            repellat
                                            voluptates.</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="card">
                            <div className="card__inner">
                                <div className="card__side card__side--front">
                                    {/*<div className="card__image-wrapper">*/}
                                    <img className="card__image" src={photoFive} alt="img"/>
                                    {/*</div>*/}
                                    <div className="card__body card__body--flex">
                                        <h2 className="card__title">Eldar JM</h2>
                                        <span className="card__arrow">&rarr;</span>
                                    </div>
                                </div>
                                <div className="card__side card__side--back">
                                    <div className="card__body">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores neque
                                            repellat
                                            voluptates.</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutPhotoGYM;