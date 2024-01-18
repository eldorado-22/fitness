import React from 'react';
import "./style.scss";

const TrainHero = () => {
    return (
        <>
            <section id="trainer_hero">
                <div className="container">
                    <div className="trainer_hero">
                        <h1 className="text-gray-50 text-6xl text-red-700 font-extrabold text-center pt-[18%]">
                            Trainer
                            <span className="font-extrabold text-red-700">
                               GYM
                        </span>
                        </h1>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TrainHero;