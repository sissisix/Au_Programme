import './Services.css';
import ServiceMobile from '../../components/services/ServiceMobile';
import ServiceWeb from '../../components/services/ServiceWeb';

function changeTarif() {
    var toggle = document.getElementById("toggle");
    var mobileBlock = document.getElementById("mobile");
    var webBlock = document.getElementById("web");

    if (toggle.checked) {
        mobileBlock.style.display = "none";
        webBlock.style.display = "block";
    } else {
        mobileBlock.style.display = "block";
        webBlock.style.display = "none";
    }
}

const Services = () => {
    window.scrollTo(0,0);
    return (
        <div className="pt-16 bg-gradient-to-b from-redder to-orange to-60% flex flex-col justify-center text-center">
            <div className="p-16 text-white">
                <h2 className="mb-8 font-title font-bold text-3xl">Nos formules</h2>
                <p className="font-para">
                    Créer votre application mobile et/ou votre site web en toute confiance.
                    <br />
                    Faites le choix d'une formule qui s'adapte à vos besoins, ou créez la votre.
                </p>
            </div>
            <div className="py-16 px-8 sm:px-16 flex flex-col justify-center text-center bg-white h-fit w-full rounded-t-4xl">
                <div className='flex items-center justify-center'>
                    <input type="checkbox" id="toggle" className="toggleCheckbox" onClick={changeTarif} />
                    <label htmlFor="toggle" className='toggleContainer'>
                        <div>Mobile</div>
                        <div>Web</div>
                    </label>
                </div>
                <div id='mobile'>
                    <ServiceMobile/>
                </div>
                <div id='web' className='hidden'>
                    <ServiceWeb/>
                </div>
            </div>
        </div >
    )
};

export default Services;