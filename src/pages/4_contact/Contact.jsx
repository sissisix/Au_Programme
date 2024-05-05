import { useLocation } from 'react-router-dom';
import './Contact.css';
import SocialButtons from "../../components/socialButton/SocialButtons";

const Contact = () => {
    window.scrollTo(0,0);
    
    let location = useLocation();

    return (
        <div className="bg-lightBeige pt-16 pb-20 h-min relative flex flex-col items-center justify-center text-center text-darkGray">
            <div className="pt-16 pb-8">
                <h2 className="font-title font-bold text-3xl">Contactez-nous !</h2>
                <p className={ location.state ? 'mx-10 mt-8 mb-4' : 'mx-10 mt-8' }>Nous sommes disponibles du lundi au samedi de 9h à 19h</p>
                <p className={ location.state ? 'mx-10' : 'hidden' }>Vous pouvez nous envoyer :<br/>{ location.state }</p>
            </div>
            <div className="sm:px-0 md:px-28 lg:px-0 text-orange relative flex w-full flex-col lg:flex-row items-center text-center justify-center">
                <div className="containerContact">
                    <div className="py-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icnContact">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                    </div>
                    <div className="pb-4 w-full">
                        <p className="font-bold text-2xl">Par téléphone</p>
                        <p className='my-4 h-14'>Appelez-nous au :<br /><b>+33 6 52 93 23 04</b></p>
                    </div>
                </div>
                <div className="containerContact disable">
                    <div className="py-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icnContact">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg>
                    </div>
                    <div className="pb-4 w-full">
                        <p className="font-bold text-2xl">Par tchat</p>
                        <div className='flex justify-center items-center my-4 h-14'>
                            <SocialButtons />
                        </div>
                    </div>
                </div>
                <div className="containerContact">
                    <div className="py-8">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icnContact">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                        </svg>
                    </div>
                    <div className="pb-4 w-full">
                        <p className="font-bold text-2xl">Par e-mail</p>
                        <p className='my-4 h-14'>Ecrivez-nous à l'adresse :<br /><b>simon.suzac.dm@hotmail.com</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;