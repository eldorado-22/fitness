import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header id="header" className="">
            <div className="container">
                <div className="header flex justify-between items-center">
                    <nav className="header--nav">
                        <Link to={"/"}>
                            <a href="#" className="text text-xl text-amber-50">Home</a>
                        </Link>
                        <Link to={"/about"}>
                            <a href="#" className="px-8 text-xl text-amber-50">About</a>
                        </Link>
                        <Link to={"/"}>
                            <a href="#" className="text text-xl text-amber-50">Services</a>
                        </Link>
                    </nav>
                    <img className="w-[8%] object-cover"
                         src="https://fitnessluka.cz/templates/Default/images/animated-logo.svg" alt="img"/>
                    {/*<h1>GYM</h1>*/}
                    {/*<h1 className="text text-3xl bg-gradient-to-r from-blue-400">Maximum</h1>*/}
                    <nav className="header--nav">
                        <Link to={'/pool'}>
                            <a href="#" className="text  text-xl text-amber-50">Pool</a>
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