import React from 'react';
import "./style.scss";
import {BsArrowDown} from "react-icons/bs";

const Text = () => {

    return (
        <>
            <section id="text">
                <div className="container">
                    <div className="text py-20">
                        <div className="flex justify-center pt-2">
                            <BsArrowDown className="text--arrow "/>
                            <img className="relative circle-loader" src="https://fitnessluka.cz/templates/Default/images/icons/scroll.png" alt="img"/>
                        </div>
                        <div className="p-10 flex">
                            <span className="text-amber-50  text-9xl relative bottom-3">"</span>

                            <div className="testimonial-block">
                                <div className="inner-box">
                                    <p className="text-gray-500  text-center p-10 text-2xl">Chcete být zdraví a mít dokonalé tělo? FITNESS APOLLON je Vaše
                                        správná volba! Vytvoříme Vám osobní tréninkový program aby se Vaše sny staly
                                        realitou! Přijďte mezi nás ještě dnes, nebo si domluvte osobní shůzku s některým z
                                        našich trenérů.
                                    </p>
                                </div>
                            </div>
                            <span className="text-amber-50 text-9xl relative top-32">"</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Text;