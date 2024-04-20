import React from "react";
import { NavLink } from 'react-router-dom';
import './footer.css';
import SocialButtons from "../socialButton/SocialButtons";



const title = 'Au <...> Programme';

const Footer = () => {
    return (
        <div className="width-screen bg-lightGray">
            <div className="mx-auto max-w-7xl px-8 md:px-28 lg:px-44">
                <div className="relative flex h-16 items-center justify-center text-lightBlack">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                        <NavLink
                            key="Accueil"
                            to="/"
                        >
                            <h1 className="text-xl font-bold h-auto w-auto font-title">{title}</h1>
                        </NavLink>

                    </div>
                    <div className="absolute flex inset-y-0 right-0 items-center">
                        <SocialButtons/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;