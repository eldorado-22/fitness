import React from 'react';
import "./style.scss";
import {BsGithub, BsInstagram, BsLinkedin, BsTwitter, BsYoutube} from "react-icons/bs";
import {FaTiktok} from "react-icons/fa";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer">
                    <img className="w-[20%] pb-7 object-cover flex m-auto"
                         src="https://fitnessluka.cz/templates/Default/images/animated-logo.svg" alt="img"
                    />
                    <div className="flex justify-around items-center">
                        <div className="footer--nav  items-center ">
                            <div className="footer--nav__group py-6">
                                <h4 className="text-white text-3xl">Address</h4>
                                <a target="_blank"
                                   href="https://www.google.com/maps/place/Elite+House+Stone+%7C+%D0%98%D0%B7%D0%B4%D0%B5%D0%BB%D0%B8%D1%8F+%D0%B8%D0%B7+%D0%BA%D0%B0%D0%BC%D0%BD%D1%8F/@42.8803487,74.5844615,18z/data=!3m1!4b1!4m6!3m5!1s0x389ec81914c990cf:0x4348f7dd60fa44ea!8m2!3d42.8803487!4d74.585604!16s%2Fg%2F11f54kxqlj"
                                   className="text-gray-500 text-xl py-3">Elite House 109/3
                                </a>
                            </div>
                            <div className="footer--nav__group ">
                                <h4 className="text-white text-3xl">Phone</h4>
                                <a href="tel:+996708229173" className="text-gray-500 text-xl py-3">+996(708)-229-173</a>
                            </div>
                            <div className="footer--nav__group py-6">
                                <h4 className="text-white text-3xl">Graphic Work</h4>
                                <p className="text-gray-500 text-xl py-3">9:00-22:00</p>
                            </div>
                            <div className="footer--nav__group ">
                                <h4 className="text-white text-3xl">Email</h4>
                                <a href="#" className="text-gray-500 text-xl py-3">jumashevv992@gmail.com</a>
                            </div>
                        </div>

                        <div className="footer--nav flex  items-center ">
                            <div className="footer--nav__group ">
                                <h4 className="text-white text-3xl">Social Networking</h4>
                                <a href="https://www.instagram.com/zhumashevv_996/" target="_blank"
                                   className="flex items-center text-gray-500 text-xl py-3">
                                    <BsInstagram/> <span className="px-2">Instagram</span>
                                </a>
                                <a href="https://www.linkedin.com/in/eldorado-jumashevv-51a792259/" target="_blank"
                                   className="flex items-center text-gray-500 text-xl py-3">
                                    <BsLinkedin/> <span className="px-2">Linkedin</span>
                                </a>
                                <a href="https://www.youtube.com/@eldarjumashevv5258/featured" target="_blank"
                                   className="flex items-center text-gray-500 text-xl py-3">
                                    <BsYoutube/> <span className="px-2">YouTube</span>
                                </a>
                                <a href="https://twitter.com/home" target="_blank"
                                   className="flex items-center text-gray-500 text-xl py-3">
                                    <BsTwitter/> <span className="px-2">Twitter</span>
                                </a>
                                <a href="https://github.com/eldorado-22/" target="_blank"
                                   className="flex items-center text-gray-500 text-xl py-3">
                                    <BsGithub/> <span className="px-2">GitHub</span>
                                </a>
                                <a href="https://tiktok.com/" target="_blank"
                                   className="flex items-center text-gray-500 text-xl py-3">
                                    <FaTiktok/> <span className="px-2">Tik Tok</span>
                                </a>

                            </div>

                        </div>

                        <div className="img">
                            <img src="https://fitnessluka.cz/templates/Default/images/background/2.jpg" alt="img"
                                 width={500}/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;