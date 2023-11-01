import React from 'react';
import "./style.scss";
import {MdEmail} from "react-icons/md";
import {FaMapMarkedAlt} from "react-icons/fa";
import {IoPhonePortrait} from "react-icons/io5";

const Contact = () => {
    return (
        <section id="contact" className="py-20 my-20" >
            <div className="container">
                <div className="contact">
                    <h1 className="text-center text-5xl pb-10  font-extrabold">Our
                        <span className="text-red-700">Contact</span>
                    </h1>
                    <div className="contact--nav text-white flex justify-around items-center">
                        <div className="contact--nav flex items-center flex-col">
                            <IoPhonePortrait className="contact--nav__icons text-center text-red-700  text-7xl"/>
                            <pre className="text-4xl font-extrabold text-red-700 py-5">Phone</pre>
                            <a href="tel:+996(550)-595-065" className="text-white">+996(550)-595-065</a>
                            <a href="tel:+996(708)-229-173" className="text-white">+996(708)-229-173</a>
                        </div>
                        <div className="contact--nav__stick"></div>
                        <div className="contact--nav flex items-center flex-col">
                            <FaMapMarkedAlt className="contact--nav__icons text-center text-red-700  text-7xl"/>
                            <pre className="text-4xl font-extrabold text-red-700 py-5">Address</pre>
                            <p className="text-white">Bishkek, Kyrgyzstan</p>
                            <a href="https://go.2gis.com/gnynil" target="_blank" className="text-white">Улица Куренкеева, 138 </a>
                        </div>
                        <div className="contact--nav__stick"></div>
                        <div className="contact--nav flex items-center flex-col">
                            <MdEmail className="contact--nav__icons text-center text-red-700  text-7xl"/>
                            <pre className="text-4xl font-extrabold text-red-700 py-5">Email</pre>
                            <a href="#" className="text-white">eldorado@gmail.com</a>
                            <a href="#" className="text-white">jumashev@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;