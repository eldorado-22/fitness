import React from 'react';
import "./videos.scss";
import videosImg from "../../assets/images/video-img-3.jpg"
import playIcon from "../../assets/images/play-icon.png"

const Videos = () => {
    return (
        <section id="videos">
            <div className="container">
                <div className="videos">
                    <h1 className="text-5xl text-white font-semibold py-10 text-center">KDO
                        <span className="text-red-700">JSME</span>
                    </h1>
                    <p className="text-xl text-opacity-70 text-amber-50 text-center">Jsme fitcentrum rodinného typu s
                        více jak dvacetiletou tradicí. Za tuto dobu jsme urazili obrovký
                        kus cesty ve vývoji. <br/>
                        Našim návštěvníkům nabízíme nejmodernější posilovací stroje, přátelský přístup,
                        příjemné <br/> ceny a
                        širokou škálu služeb, které se snažíme <br/> neustále rozšiřovat.
                    </p>
                    <div className="videos--video-box py-10">
                        <figure className="video-image">
                            <img src={videosImg} alt="img" title="video"
                                 className="mCS_img_loaded"/>
                        </figure>

                        <a href="https://youtu.be/ZKxGhp0PR6Q" className="lightbox-image overlay-box">
                            <span>
                                <img src={playIcon} alt="apollon" className="mCS_img_loaded"/>
                                <i className="ripple"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Videos;