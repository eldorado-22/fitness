import React, {useEffect, useState} from 'react';
import "./style.scss";
import {Link} from "react-router-dom";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
// import BurgerMenu from "../Burger-Menu/menu";

const Header = () => {
    const accObj = JSON.parse(localStorage.getItem('tranAcc')) || {inAcc: false}
    const [scroll, setScroll] = useState(false)
    // const [burger, setBurger] = useState(false)
    const [accInd,setAccInd] = useState(false)

    const toScroll = () => {
        setScroll(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', toScroll)
    })

    function logOut(){
        localStorage.setItem('tranAcc', JSON.stringify({inAcc: false}))
    }

    return (
        <header style={{
            backdropFilter: scroll > 50 ? "blur(4px)" : "",
            background: scroll > 50 ? "rgba(0,0,0,0.73)" : "",
            transition: scroll > 50 ? ".5s" : ""
        }} id="header">

            <div className="container">
                <div className="header flex justify-between items-center">
                  {/*<a href="/">*/}
                      <img className="w-[15%] object-cover pl-14"
                           src="https://fitnessluka.cz/templates/Default/images/animated-logo.svg" alt="img"
                      />
                  {/*</a>*/}
                    <nav className="header--nav flex">
                        <Link to={"/"}>
                            <a href="#" className="text text-xl text-amber-50">Home</a>
                        </Link>
                        <Link to={"/about"}>
                            <a href="#" className="px-8 text-xl text-amber-50">About</a>
                        </Link>
                        <Link to={"/pool"}>
                            <a href="#" className="text text-xl text-amber-50">Pool</a>
                        </Link>
                        <Link to={'/services'}>
                            <a href="#" className="text  text-xl text-amber-50">Services</a>
                        </Link>
                        <Link to={"/trainer"}>
                            <a href="#" className="px-8 text-xl text-amber-50">Trainer</a>
                        </Link>
                        {
                            accObj.inAcc?
                                <div className='acc'>
                                    <p onClick={()=> setAccInd(!accInd)} className="text-teal-200">{
                                        accObj.name
                                    }
                                    <span><MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown></span>
                                    </p>
                                    <div onClick={()=> logOut()} style={{height: accInd? '': '0'}}>
                                        <h3>sign out</h3>
                                    </div>
                                </div>
                                :
                                <Link to={"/registration"} className="text text-xl text-amber-500">
                                    Registration
                                </Link>

                        }
                    </nav>
                </div>
                <div className="burger ">
                    <div className="burger-item "></div>
                    <div className="burger-item "></div>
                    <div className="burger-item "></div>
                </div>
            </div>



        </header>
    );
};

export default Header;