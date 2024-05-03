import React from "react";
import { NavLink } from 'react-router-dom';
import './Footer.css';
import SocialButtons from "../socialButton/SocialButtons";



const title = 'Au <...> Programme';

const Footer = () => {
    return (
        <div className="width-full bg-lightGray border-t border-solid">
            <div className="mx-auto max-w-7xl px-8 md:px-28 lg:px-44">
                <div className=" space-x-1 relative flex h-16 items-center justify-center text-lightBlack">
                    <div className="relative flex h-fit left-0 sm:w-1/2 sm:mb-0  items-start justify-start">
                        <NavLink
                            key="Accueil"
                            to="/"
                        >
                            <h1 className="hidden sm:block text-xl font-bold h-auto w-auto font-title">{title}</h1>
                            <img className="sm:hidden w-8" src="/icn_logo.png"/>
                        </NavLink>

                    </div>
                    <div className="relative flex flex-col right-0 md:w-1/2 justify-end items-end">
                        <SocialButtons/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;