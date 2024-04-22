import './Services.css';
import ServiceMobile from '../../components/services/ServiceMobile';
import ServiceWeb from '../../components/services/ServiceWeb';

function changeTarif() {
    var toggle = document.getElementById("toggle");
    var mobileBlock = document.getElementById("mobile");
    var webBlock = document.getElementById("web");
    //var asterix = document.getElementById("asterix");

    if (toggle.checked) {
        mobileBlock.style.display = "none";
        webBlock.style.display = "block";
        //asterix.textContent = "*Le site web sera mit en ligne avec un serveur de votre choix que vous aurez fourni.";
    } else {
        mobileBlock.style.display = "block";
        webBlock.style.display = "none";
        //asterix.textContent = "*L'application sera téléchargée sur le Play Store avec un compte développeur que vous aurez fourni.";
    }
}

const Services = () => {
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
            <div className="p-16 flex flex-col justify-center text-center bg-white h-fit w-full rounded-t-4xl">
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