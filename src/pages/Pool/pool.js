import React from 'react';
import HeroPool from "./Pool_img";
import PoolText from "./Pool_Text/PoolText";
import Pool_Bas from "./Pool_Bassein";

const Pool = () => {
    window.scroll(0,0)

    return (
        <>
            <HeroPool/>
            <PoolText/>
            <Pool_Bas/>
        </>
    );
};

export default Pool;