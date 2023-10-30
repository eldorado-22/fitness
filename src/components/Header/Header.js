import React, {useEffect, useState} from 'react';
import "./style.scss";
import {NavLink} from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
// import BurgerMenu from "../Burger-Menu/menu";

const Header = ({setBurger, burger}) => {
    const [scroll, setScroll] = useState(false)

    const toScroll = () => {
        setScroll(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', toScroll)
    })


    return (
       <>
           <header style={{
               backdropFilter: scroll > 30 ? "blur(4px)" : "",
               background: scroll > 30 ? "rgba(0,0,0,0.73)" : "",
               transition: scroll > 30 ? ".5s" : ""
           }} id="header">
               <div className="container">
                   <div className="header flex justify-between items-center">
                       {/*<NavLink to="/">*/}
                       <img className="w-[15%] object-cover pl-14"
                            src="https://fitnessluka.cz/templates/Default/images/animated-logo.svg"
                            alt="img"
                       />
                       {/*</NavLink>*/}
                       <nav className="header--nav flex">
                           <NavLink to={"/"} className="text text-xl text-amber-50">
                               Home
                           </NavLink>
                           <NavLink to={"/about"} className="text text-xl text-amber-50">
                               About
                           </NavLink>
                           <NavLink to={"/pool"} className="text text-xl text-amber-50">
                               Pool
                           </NavLink>
                           <NavLink to={'/services'} className="text text-xl text-amber-50">
                               Services
                           </NavLink>
                           <NavLink to={"/trainer"} className="text text-xl text-amber-50">
                               Trainer
                           </NavLink>
                       </nav>
                       <div onClick={() => setBurger(true)} className="burger ">
                           <div className="burger-item"></div>
                           <div className="burger-item"></div>
                           <div className="burger-item"></div>
                       </div>

                   </div>

               </div>
           </header>
           {
               burger ? (
                   <BurgerMenu setBurger={setBurger}/>
               ) : (
                   <></>
               )
           }
       </>
    );
};

export default Header;