import React from 'react';
import "./style.scss";
import {BsFacebook, BsInstagram, BsLinkedin} from "react-icons/bs";
import imgOne from "./../../../assets/images/pool_img_1.jpg"
import imgTwo from "./../../../assets/images/pool_img_2.jpg"
// import imgFour from "./../../../assets/images/pool_img_3.jpg"

const Pool_Bas = () => {
    return (
        <>
            <section id="bas">
                <div className="container">
                    <div className="bas">
                        <div className="bas--text">
                            <h1 className="text-gray-500 text-6xl font-extrabold text-center pt-[1%]">
                                Pool
                                <span className="font-bold text-red-700"> Information</span>
                            </h1>
                            <div className="bas--text__desc p-10 flex">
                                <span className="text-amber-50  text-9xl  bottom-3">"</span>

                                <div className="testimonial-block">
                                    <div className="inner-box">
                                        <p className="text-gray-500  text-center p-10 text-2xl">Chcete být zdraví a mít
                                            dokonalé tělo? FITNESS APOLLON je Vaše
                                            správná volba! Vytvoříme Vám osobní tréninkový program aby se Vaše sny staly
                                            realitou! Přijďte mezi nás ještě dnes, nebo si domluvte osobní shůzku s
                                            některým z
                                            našich trenérů.
                                        </p>
                                    </div>
                                </div>
                                <span className="text-amber-50 text-9xl relative top-32">"</span>
                            </div>

                        </div>
                        <div className="bas--group">
                            <div className="bas--group__first">
                                <div className="ones">
                                    <img id="img" src={imgOne} alt="img"/>
                                    <div className="bas--group__first--phone">
                                        <h4>Photo One</h4>
                                        <div className="bas--group__first--phone__socials">
                                            <BsInstagram/>
                                            <BsFacebook/>
                                            <BsLinkedin/>
                                        </div>
                                    </div>
                                </div>
                                <div className="two-group">
                                    <div className="two">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aliquam
                                            amet assumenda atque autem commodi dicta ducimus eaque eligendi enim illo
                                            inventore, iste magnam mollitia nesciunt non odio odit officiis perferendis
                                            placeat quasi qui quis quos recusandae sit vel?
                                        </p>
                                    </div>
                                    <div className="bas--group__first--phone__socials">
                                        <a href="https://www.instagram.com/eldar_jumashevv/" target="_blank">
                                            <BsInstagram className="inst"/>
                                        </a>
                                        <a href="https://www.facebook.com/eldoradojumashevv/" target="_blank">
                                            <BsFacebook className="face"/>
                                        </a>
                                        <a href="https://www.linkedin.com/in/eldar-jumashevv-51a792259/">
                                            <BsLinkedin className="link"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="bas--group__first">
                                <div className="ones">
                                    <img id="img" src={imgOne} alt="img"/>
                                    <div className="bas--group__first--phone">
                                        <h4>Photo One</h4>
                                        <div className="bas--group__first--phone__socials">
                                            <BsInstagram/>
                                            <BsFacebook/>
                                            <BsLinkedin/>
                                        </div>
                                    </div>
                                </div>
                                <div className="two-group">
                                    <div className="two">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aliquam
                                            amet assumenda atque autem commodi dicta ducimus eaque eligendi enim illo
                                            inventore, iste magnam mollitia nesciunt non odio odit officiis perferendis
                                            placeat quasi qui quis quos recusandae sit vel?
                                        </p>
                                    </div>
                                    <div className="bas--group__first--phone__socials">
                                        <a href="https://www.instagram.com/eldar_jumashevv/" target="_blank">
                                            <BsInstagram className="inst"/>
                                        </a>
                                        <a href="https://www.facebook.com/eldoradojumashevv/" target="_blank">
                                            <BsFacebook className="face"/>
                                        </a>
                                        <a href="https://www.linkedin.com/in/eldar-jumashevv-51a792259/">
                                            <BsLinkedin className="link"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="bas--group__first">
                                <div className="ones">
                                    <img id="img" src={imgOne} alt="img"/>
                                    <div className="bas--group__first--phone">
                                        <h4>Photo One</h4>
                                        <div className="bas--group__first--phone__socials">
                                            <BsInstagram/>
                                            <BsFacebook/>
                                            <BsLinkedin/>
                                        </div>
                                    </div>
                                </div>
                                <div className="two-group">
                                    <div className="two">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aliquam
                                            amet assumenda atque autem commodi dicta ducimus eaque eligendi enim illo
                                            inventore, iste magnam mollitia nesciunt non odio odit officiis perferendis
                                            placeat quasi qui quis quos recusandae sit vel?
                                        </p>
                                    </div>
                                    <div className="bas--group__first--phone__socials">
                                        <a href="https://www.instagram.com/eldar_jumashevv/" target="_blank">
                                            <BsInstagram className="inst"/>
                                        </a>
                                        <a href="https://www.facebook.com/eldoradojumashevv/" target="_blank">
                                            <BsFacebook className="face"/>
                                        </a>
                                        <a href="https://www.linkedin.com/in/eldar-jumashevv-51a792259/">
                                            <BsLinkedin className="link"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Pool_Bas;