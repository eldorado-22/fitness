import React from 'react';
import {BsArrowDown} from "react-icons/bs";

const PoolText = () => {
    return (
        <>
            <section id="pool-text">
                <div className="container">
                    <div className="pool-text py-20">
                        <div className="pool-text--icons flex justify-center pt-2">
                            <BsArrowDown className="pool-text--icons__arrow "/>
                            <img className="relative circle-loader" src="https://fitnessluka.cz/templates/Default/images/icons/scroll.png" alt="img"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PoolText;