import React from 'react';
// import {NavLink} from "react-router-dom";

const BurgerMenu = ({burger, setBurger}) => {
    return (
        <div className='menu' style={{
            left: !burger ? '-2000px' : '0'
        }}>
            {/*<div className='burgerMenu'>*/}
            {/*    <div className='burgerMenu--group'>*/}
            {/*        <NavLink to={'/'}>*/}
            {/*            <h1 onClick={() => setBurger(!burger)}>MOTION SHOP</h1>*/}
                    {/*</NavLink>*/}
                {/*</div>*/}
                {/*<NavLink to={'/faq'}>*/}
                {/*    <div className='burgerMenu--block' onClick={() => setBurger(!burger)}>*/}
                {/*        <h3>FAQ</h3>*/}
                {/*    </div>*/}
                {/*</NavLink>*/}
                {/*<NavLink to={'/aboutUs'}>*/}
                {/*    <div className='burgerMenu--block' onClick={() => setBurger(!burger)}>*/}
                {/*        <h3>О нас</h3>*/}
                {/*    </div>*/}
                {/*</NavLink>*/}
                {/*<NavLink to={'/basket'}>*/}
                {/*    <div className='burgerMenu--block' onClick={() => setBurger(!burger)}>*/}
                {/*        <h3>Корзина</h3>*/}
                {/*    </div>*/}
                {/*</NavLink>*/}
            {/*</div>*/}
        </div>
    );
};

export default BurgerMenu;