import React, {useState} from 'react';
import "./style.scss";
import "./../../../components/Photos-Gym/styles.scss"
import photoSix from "../../../assets/images/gallery6.jpg";
import photoEleven from "../../../assets/images/gallery12.jpg";
import photoEight from "../../../assets/images/gallery7.jpg";
import photoNine from "../../../assets/images/gallery9.jpg";
import photoTen from "../../../assets/images/gallery10.jpg";
import photoOne from "../../../assets/images/gallery1.jpg";
import photoTwo from "../../../assets/images/gallery2.jpg";
import photoThree from "../../../assets/images/gallery3.jpg";
import photoFour from "../../../assets/images/gallery4.jpg";
// import photoFive from "../../../assets/images/gallery5.jpg";

const AboutPhotoGYM = () => {
    const [modal, setModal] = useState(false)
    const [modalImg, setModalImg] = useState('')

    const handleOpen = () => {
        setModal(true)
    }
    const handleClose = () => {
        setModal(false)
    }
    const arr = [
        {
            img: photoSix
        },
        {
            img: photoEleven
        },
        {
            img: photoEight
        },
        {
            img: photoNine
        },
        {
            img: photoTen
        },
        {
            img: photoOne
        },
        {
            img: photoTwo
        },
        {
            img: photoThree
        },
        {
            img: photoFour
        },
        {
            img: photoEleven
        },
    ]

    return (
        <>
            <section id="photos">
                {
                    modal ? <div onClick={handleClose} className="modal">
                        <img src={modalImg} alt="img"/>
                    </div> : ""
                }
                <div className="container">
                    <h1 className="text-red-700 text-6xl text-center font-extrabold pb-10">Photos <span
                        className="font-bold text-red-700 py-3">GYM</span></h1>
                    <div className="photos py-3">
                        <div className=" flex  justify-between items-center flex-wrap gap-10">
                            {
                                arr.map(el => (
                                    <article onClick={() => {
                                        handleOpen();
                                        setModalImg(el.img)
                                    }} className="card">
                                        <div className="card__inner">
                                            <div className="card__side card__side--front">
                                                <img className="card__image" src={el.img}
                                                     alt="img"/>
                                                <div className="card__body card__body--flex">
                                                    <h2 className="card__title">Read More...</h2>
                                                    <span className="card__arrow">&rarr;</span>
                                                </div>
                                            </div>
                                            <div className="card__side card__side--back">
                                                <div className="card__body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                        Assumenda corporis doloribus eligendi eveniet expedita fugiat
                                                        laboriosam molestiae porro quia voluptatem!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPhotoGYM;