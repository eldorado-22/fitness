import React from 'react';
import "./styles.scss";
import photoOne from "./../../assets/images/gallery1.jpg"
import photoTwo from "./../../assets/images/gallery2.jpg"
import photoThree from "./../../assets/images/gallery3.jpg"
import photoFour from "./../../assets/images/gallery4.jpg"
import photoFive from "./../../assets/images/gallery5.jpg"
import photoSix from "./../../assets/images/gallery6.jpg"
// import photoSeven from "./../../assets/images/gallery6.jpg"
import photoEight from "./../../assets/images/gallery7.jpg"
import photoNine from "./../../assets/images/gallery9.jpg"
import photoTen from "./../../assets/images/gallery10.jpg"
import photoEleven from "./../../assets/images/gallery12.jpg"
import {NavLink} from "react-router-dom";
// import {BsPlusLg} from "react-icons/bs";


const PhotosGym = () => {
    // const [modal, setModal] = useState(false)
    return (
        <section id="photos">
            <div className="container">
                <div className="photos py-10">
                    <h1 className="text-center text-6xl text-white py-20">Photo
                        <span className="text-red-700 font-bold"> GYM</span>
                    </h1>
                    <div className="photos__block flex  justify-between flex-wrap gap-5 items-center">
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
                    <div className="photos__block  py-10 flex flex-wrap gap-5  justify-between items-center">
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
                    <NavLink to={"/about"}>
                        <button className="rounded-full ... p-3 hover:bg-white hover:text-black transition-opacity outline-none text-xl bg-red-800 text-white flex m-auto ">Others Photo</button>
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default PhotosGym;