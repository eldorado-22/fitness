import React from 'react';
import "./style.scss";
import PhotosGym from "../../../components/Photos-Gym/photos-gym";
import Gallery from "../../../components/Gallery/gallery";

const TrainCategory = () => {
    return (<>
        <div id="category">
            <div className="container">
                <div className="category">
                    <h1 className="text-red-700 text-6xl font-extrabold text-center">
                        Train
                        <span className="font-extrabold text-gray-50 ">
                            Category
                        </span>
                    </h1>
                    <div className="category--group">

                    </div>
                </div>
            </div>
        </div>
    </>);
};

export default TrainCategory;