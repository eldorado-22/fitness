import React, {useEffect, useState} from 'react';
import "./style.scss";
import {Link, NavLink} from "react-router-dom";
import BurgerMenu from "../Burger-Menu/menu";
import {BiMenuAltLeft} from "react-icons/bi";

const Header = () => {

    const [scroll, setScroll] = useState(false)
    const [burger, setBurger] = useState(false)

    const toScroll = () => {
        setScroll(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', toScroll)
    })

    return (
        <header style={{
            backdropFilter: scroll > 50 ? "blur(6px)" : "",
            background: scroll > 50 ? "rgba(0,0,0,0.73)" : "",
        }} id="header">
            <BurgerMenu burger={burger} setBurger={setBurger} style={{
                background: "white",
                zIndex: "999"
            }}/>
            <div className="container">
                <div className="header flex justify-between items-center">
                    <BiMenuAltLeft className='header--menu' onClick={() => setBurger(true)}/>
                    <nav className="header--nav">
                        <Link to={"/"}>
                            <a href="#" className="text text-xl text-amber-50">Home</a>
                        </Link>
                        <Link to={"/about"}>
                            <a href="#" className="px-8 text-xl text-amber-50">About</a>
                        </Link>
                        <Link to={"/pool"}>
                            <a href="#" className="text text-xl text-amber-50">Pool</a>
                        </Link>
                    </nav>
                    {/*<NavLink to={"/"}>*/}
                        <img className="w-[15%] object-cover pl-14"
                             src="https://fitnessluka.cz/templates/Default/images/animated-logo.svg" alt="img"
                        />
                    {/*</NavLink>*/}
                    <nav className="header--nav">
                        <Link to={'/services'}>
                            <a href="#" className="text  text-xl text-amber-50">Services</a>
                        </Link>
                        <Link to={"/trainer"}>
                            <a href="#" className="px-8 text-xl text-amber-50">Trainer</a>
                        </Link>
                        <Link to={"/contact"}>
                            <a href="#" className="text text-xl text-amber-50">Contact</a>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;