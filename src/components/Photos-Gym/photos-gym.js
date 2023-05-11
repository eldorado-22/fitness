import React, {useState} from 'react';
import "./styles.scss";
import photoOne from "./../../assets/images/gallery1.jpg"
import photoTwo from "./../../assets/images/gallery2.jpg"
import photoThree from "./../../assets/images/gallery3.jpg"
import photoFour from "./../../assets/images/gallery4.jpg"
import photoFive from "./../../assets/images/gallery5.jpg"
import photoSix from "./../../assets/images/gallery6.jpg"
import photoSeven from "./../../assets/images/gallery6.jpg"
import photoEight from "./../../assets/images/gallery7.jpg"
import photoNine from "./../../assets/images/gallery9.jpg"
import photoTen from "./../../assets/images/gallery10.jpg"
import photoEleven from "./../../assets/images/gallery12.jpg"
import {BsPlusLg} from "react-icons/bs";

const PhotosGym = () => {
    const [modal, setModal] = useState(false)
    return (
        <section id="photos">
            <div className="container">
                <div className="photos py-10">
                    <h1 className="text-center text-6xl text-white py-10">Photo
                        <span className="text-red-700 font-bold"> GYM</span>
                    </h1>
                    <div className="photos--group basis-1/3 gap-8 flex flex-wrap items-center justify-center">
                        <div className="photos--group__first">
                            <img className="photos--group__first--one" src={photoOne} alt="img" width={300}/>
                            <BsPlusLg onClick={() => setModal(true)}
                                      className="cursor-pointer photos--group__first--icon"/>
                            <div className="photos--group__first--block"></div>
                        </div>
                        {/*<div style={{*/}
                        {/*    display: modal === true ? "block" : "none"*/}
                        {/*}} className="photos--group__modal">*/}
                        {/*    <img className="photos--group__first--one" src={photoOne} alt="img" width={300}/>*/}
                        {/*</div>*/}
                        <div className="photos--group__first">
                            <img className="photos--group__first--one" src={photoTwo} alt="img" width={300}/>
                            <BsPlusLg className="photos--group__first--icon"/>
                            <div className="photos--group__first--block"></div>
                        </div>
                        <div className="photos--group__first">
                            <img className="photos--group__first--one" src={photoThree} alt="img" width={300}/>
                            <BsPlusLg className="photos--group__first--icon"/>
                            <div className="photos--group__first--block"></div>
                        </div>
                        <div className="photos--group__first">
                            <img className="photos--group__first--one" src={photoFour} alt="img" width={300}/>
                            <BsPlusLg className="photos--group__first--icon"/>
                            <div className="photos--group__first--block"></div>
                        </div>
                        <div className="photos--group__first">
                            <img className="photos--group__first--one" src={photoFive} alt="img" width={300}/>
                            <BsPlusLg className="photos--group__first--icon"/>
                            <div className="photos--group__first--block"></div>
                        </div>
                        <div className="photos--group__first">
                            <img className="photos--group__first--one" src={photoSeven} alt="img" width={300}/>
                            <BsPlusLg className="photos--group__first--icon"/>
                            <div className="photos--group__first--block"></div>
                        </div>
                        <div className="photos--group__first">
                            <img className="photos--group__first--one" src={photoEight} alt="img" width={300}/>
                            <BsPlusLg className="photos--group__first--icon "/>
                            <div className="photos--group__first--block"></div>
                        </div>
                        <div className="photos--group__first">
                            <img className="photos--group__first--one" src={photoNine} alt="img" width={300}/>
                            <BsPlusLg className="photos--group__first--icon "/>
                            <div className="photos--group__first--block"></div>
                        </div>
                        <div className="photos--group__first">
                            <img className="photos--group__first--one" src={photoTen} alt="img" width={300}/>
                            <BsPlusLg className="photos--group__first--icon "/>
                            <div className="photos--group__first--block"></div>
                        </div>
                        <div className="photos--group__first">
                            <img className="photos--group__first--one" src={photoEleven} alt="img" width={300}/>
                            <BsPlusLg className="photos--group__first--icon "/>
                            <div className="photos--group__first--block"></div>
                        </div>
                        <div className="photos--group__first">
                            <img className="photos--group__first--one" src={photoTwo} alt="img" width={300}/>
                            <BsPlusLg className="photos--group__first--icon"/>
                            <div className="photos--group__first--block"></div>
                        </div>
                        <div className="photos--group__first">
                            <img className="photos--group__first--one" src={photoFour} alt="img" width={300}/>
                            <BsPlusLg className="photos--group__first--icon"/>
                            <div className="photos--group__first--block"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PhotosGym;