import React from "react";
import { NavLink } from 'react-router-dom';
import './footer.css';
import icnlink from "../../assets/icones/Icn_Linkedin.png";
import icnFcb from "../../assets/icones/Icn_Facebook.png";
import icnInst from "../../assets/icones/Icn_Instagram.png";
import icnTwit from "../../assets/icones/Icn_Twitter.png";



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
                    <div className="absolute inset-y-0 right-0 flex items-center">
                        <a className="icnSocial disable" href="https://fr.linkedin.com/in/simon-suzac-939647154?trk=public-profile-badge-profile-badge-view-profile-cta" target="_blank" rel="noopener noreferrer"><img src={icnlink} alt="Avatar" /></a>
                        <a className="icnSocial disable" href="#" target="_blank" rel="noopener noreferrer"><img src={icnFcb} alt="Avatar" /></a>
                        <a className="icnSocial disable" href="#" target="_blank" rel="noopener noreferrer"><img src={icnInst} alt="Avatar" /></a>
                        <a className="icnSocial disable" href="#" target="_blank" rel="noopener noreferrer"><img src={icnTwit} alt="Avatar" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;