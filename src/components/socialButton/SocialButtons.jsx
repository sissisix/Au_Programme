import icnlink from "../../assets/icones/Icn_Linkedin.png";
import icnFcb from "../../assets/icones/Icn_Facebook.png";
import icnInst from "../../assets/icones/Icn_Instagram.png";
import icnTwit from "../../assets/icones/Icn_Twitter.png";

const SocialButtons = () => {
    return (
        <div className="flex">
            <a className="icnSocial disable" href="https://fr.linkedin.com/in/simon-suzac-939647154?trk=public-profile-badge-profile-badge-view-profile-cta" target="_blank" rel="noopener noreferrer"><img src={icnlink} alt="Avatar" /></a>
            <a className="icnSocial disable" href="#" target="_blank" rel="noopener noreferrer"><img src={icnFcb} alt="Avatar" /></a>
            <a className="icnSocial disable" href="#" target="_blank" rel="noopener noreferrer"><img src={icnInst} alt="Avatar" /></a>
            <a className="icnSocial disable" href="#" target="_blank" rel="noopener noreferrer"><img src={icnTwit} alt="Avatar" /></a>
        </div>
    )
}

export default SocialButtons