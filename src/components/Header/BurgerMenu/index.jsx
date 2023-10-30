import React from 'react';
import {NavLink} from "react-router-dom";
import "./../style.scss"

const BurgerMenu = ({ setBurger}) => {


    // const handleClose = () => {
    //     setBurger(false)
    // }

    return (
        <>
            <div className="container">
                <div className="label">

                    <div className="menu-bos">

                        <div className="exit">
                            <h6 onClick={() => setBurger(false)}>&times;</h6>
                        </div>
                        <div className="menu">
                            <img className="w-[15%] object-cover pl-14"
                                 src="https://fitnessluka.cz/templates/Default/images/animated-logo.svg"
                                 alt="img"
                            />
                            <NavLink to={"/"} className="text text-xl text-amber-50">
                                <a href="#">Home</a>
                            </NavLink>
                            <NavLink to={"/about"} className="text text-xl text-amber-50">
                                <a href="#">About</a>
                            </NavLink>
                            <NavLink to={"/pool"} className="text text-xl text-amber-50">
                                <a href="#">
                                    Pool
                                </a>
                            </NavLink>
                            <NavLink to={'/services'} className="text text-xl text-amber-50">
                                <a href="#">Services</a>
                            </NavLink>
                            <NavLink to={"/trainer"} className="text text-xl text-amber-50">
                                <a href="#">Trainer</a>
                            </NavLink>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default BurgerMenu;