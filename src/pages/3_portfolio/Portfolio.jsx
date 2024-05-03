import { useState } from 'react';
import Projects from '../../assets/projects.json';
import './Portfolio.css';

const Portfolio = () => {
    const month = {
        '01': 'Janvier',
        '02': 'Février',
        '03': 'Mars',
        '04': 'Avril',
        '05': 'Mai',
        '06': 'Juin',
        '07': 'Juillet',
        '08': 'Août',
        '09': 'Septembre',
        '10': 'Octobre',
        '11': 'Novembre',
        '12': 'Décembre',
    }
    const [open, setOpen] = useState(true);

    window.onclick = function (event) {
        const pContainer = document.getElementById('projetDetail');

        if (event.target == pContainer) {
            pContainer.className = 'projetOff';
        }
    }

    function openProjet(p) {
        const pContainer = document.getElementById('projetDetail');

        if (pContainer) {
            open ? setOpen(false) : setOpen(true);

            if (open) {
                const pTitre = document.getElementById('projetTitre');
                const pStat = document.getElementById('projetStat');
                const pType = document.getElementById('projetType');
                const pDesc = document.getElementById('projetDesc');
                const pImg = document.getElementById('projetImg');
                const pFooter = document.getElementById('projetFooter');
                const pDateR = document.getElementById('projetReal');

                pTitre ? pTitre.innerHTML = p.name ? p.name : 'Titre non trouvé' : console.log('Error : Title not found');
                pStat ? pStat.innerHTML = p.stat == true ? 'Fini' : p.stat == false ? 'En cours' : 'Statut non trouvé' : console.log('Error : Stat not found');
                pType ? pType.innerHTML = p.context ? 'Projet ' + p.context : 'Type non trouvé' : pType.textContent = 'Type non trouvé';
                pDesc ? pDesc.innerHTML = p.description ? p.description : 'Description non trouvé' : console.log('Error : Description not found');
                pImg ? pImg.src = p.imgUrl[0] : console.log('Error : Image not found');
                pImg ? pImg.className = p.imgType == 'mobile' ? 'projetImg imgMobile' : 'projetImg' : 'Erreur';
                pFooter ? pFooter.innerHTML = p.footer ? p.footer : 'Footer non trouvé' : console.log('Error : Footer not found');
                pDateR ? pDateR.innerHTML = p.date ? month[p.date.split("_")[1]] + ' ' + p.date.split("_")[0] : 'Date non trouvé' : console.log('Error : Date not found');

                pContainer.className = 'projetOn';
            } else {
                pContainer.className = 'projetOff';
            }
        } else {
            console.log("NOK");
        }
    }

    return (
        <div className="pb-8 bg-darkBlue pt-16 flex flex-col justify-center text-center">
            <div id='projetDetail' className='projetOff'>
                <div className='projetDetail'>
                    <div className='bg-white rounded-3xl'>
                        <div className='border-t-2 border-x-2 flex px-4 pt-4 pb-2 rounded-t-3xl bg-redder text-white'>
                            <div className='flex flex-col w-1/2'>
                                <div className='flex flex-col sm:flex-row whitespace-pre items-baseline'>
                                    <h2 className='projetTitre' id='projetTitre'>Titre</h2>
                                    <div className='flex'>
                                        <p className='projetInfo hidden sm:block'> - </p>
                                        <p className='projetInfo' id='projetStat'>Stat</p>
                                        <p className='projetInfo'> - </p>
                                        <p className='projetInfo' id='projetType'>Type</p>
                                    </div>
                                </div>
                                <div className='flex w-full text-left'>
                                    <p id='projetReal' className='projetInfo w-full'>Date real</p>
                                </div>
                            </div>
                            <div className='flex w-1/2 items-center justify-end'>
                                <div className='rounded-md border-2 animate-border-on hover:animate-border-off border-white'>
                                    <svg onClick={() => openProjet(null)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:cursor-pointer animate-zoom-out-plus hover:animate-zoom-in-plus">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='p-4'>
                            <p className='projetDesc' id='projetDesc'>Description</p>
                            <img className='projetImg' id='projetImg' />
                            <p className='projetFooter' id='projetFooter'>footer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-16 pb-8 text-white'>
                <h2 className='font-title font-bold text-3xl'>Portfolio</h2>
            </div>
            <div>
                {
                    Projects.map(projets => {
                        return (
                            <div className=' mx-4 flex flex-col justify-center text-center' key={projets.id}>
                                <div className='containerProjets'>
                                    <h2 className='typeProjet'>Mobile</h2>
                                    <div className='projets'>
                                        {
                                            projets.projectsMobile.map(projetsMobile => {
                                                return (
                                                    <div className='projet' key={projetsMobile.id}>
                                                        <div className='containerIcnProjet' >
                                                            <img onClick={() => openProjet(projetsMobile)} className='icnProjet' src={projetsMobile.imgIcUrl} />
                                                        </div>
                                                        <div className='absolute top-0 right-0'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={projetsMobile.stat == true ? 'w-6 h-6 text-white bg-green-400 rounded-full' : projetsMobile.stat == false ? 'hidden' : 'hidden'}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={projetsMobile.stat == true ? 'hidden' : projetsMobile.stat == false ? 'w-6 h-6 text-white bg-orange rounded-full' : 'hidden'}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={projetsMobile.stat == true ? 'hidden' : projetsMobile.stat == false ? 'hidden' : 'w-6 h-6 text-white bg-redder rounded-full'}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className='containerProjets'>
                                    <h2 className='typeProjet'>Web</h2>
                                    <div className='projets'>
                                        {
                                            projets.projectsWeb.map(projetsWeb => {
                                                return (
                                                    <div className='projet' key={projetsWeb.id}>
                                                        <div className='containerIcnProjet'>
                                                            <img onClick={() => openProjet(projetsWeb)} className='icnProjet' src={projetsWeb.imgIcUrl} />
                                                        </div>
                                                        <div className='absolute top-0 right-0'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={projetsWeb.stat == true ? 'w-6 h-6 text-white bg-green-400 rounded-full' : projetsWeb.stat == false ? 'hidden' : 'hidden'}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={projetsWeb.stat == true ? 'hidden' : projetsWeb.stat == false ? 'w-6 h-6 text-white bg-orange rounded-full' : 'hidden'}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={projetsWeb.stat == true ? 'hidden' : projetsWeb.stat == false ? 'hidden' : 'w-6 h-6 text-white bg-redder rounded-full'}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className='containerProjets'>
                                    <h2 className='typeProjet'>Games</h2>
                                    <div className='projets'>
                                        {
                                            projets.projectsGame.map(projetsGame => {
                                                return (
                                                    <div className='projet' key={projetsGame.id}>
                                                        <div className='containerIcnProjet'>
                                                            <img onClick={() => openProjet(projetsGame)} className='icnProjet' src={projetsGame.imgIcUrl} />
                                                        </div>
                                                        <div className='absolute top-0 right-0'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={projetsGame.stat == true ? 'w-6 h-6 text-white bg-green-400 rounded-full' : projetsGame.stat == false ? 'hidden' : 'hidden'}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={projetsGame.stat == true ? 'hidden' : projetsGame.stat == false ? 'w-6 h-6 text-white bg-orange rounded-full' : 'hidden'}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={projetsGame.stat == true ? 'hidden' : projetsGame.stat == false ? 'hidden' : 'w-6 h-6 text-white bg-redder rounded-full'}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className='containerProjets'>
                                    <h2 className='typeProjet'>Others</h2>
                                    <div className='projets'>
                                        {
                                            projets.projectsOther.map(projetsOther => {
                                                return (
                                                    <div className='projet' key={projetsOther.id}>
                                                        <div className='containerIcnProjet'>
                                                            <img onClick={() => openProjet(projetsOther)} className='icnProjet' src={projetsOther.imgIcUrl} />
                                                        </div>
                                                        <div className='absolute top-0 right-0'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={projetsOther.stat == true ? 'w-6 h-6 text-white bg-green-400 rounded-full' : projetsOther.stat == false ? 'hidden' : 'hidden'}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={projetsOther.stat == true ? 'hidden' : projetsOther.stat == false ? 'w-6 h-6 text-white bg-orange rounded-full' : 'hidden'}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={projetsOther.stat == true ? 'hidden' : projetsOther.stat == false ? 'hidden' : 'w-6 h-6 text-white bg-redder rounded-full'}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className='containerProjets'>
                                    <h2 className='typeProjet'>Caché</h2>
                                    <div className='projets'>
                                        {
                                            projets.projectsHidden.map(projetsCache => {
                                                return (
                                                    <div className='projet' key={projetsCache.id}>
                                                        <div className='containerIcnProjet'>
                                                            <img onClick={() => openProjet(projetsCache)} className='icnProjet' src={projetsCache.imgIcUrl} />
                                                        </div>
                                                        <div className='absolute top-0 right-0'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={projetsCache.stat == true ? 'w-6 h-6 text-white bg-green-400 rounded-full' : projetsCache.stat == false ? 'hidden' : 'hidden'}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={projetsCache.stat == true ? 'hidden' : projetsCache.stat == false ? 'w-6 h-6 text-white bg-orange rounded-full' : 'hidden'}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={projetsCache.stat == true ? 'hidden' : projetsCache.stat == false ? 'hidden' : 'w-6 h-6 text-white bg-redder rounded-full'}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div >
    )
};

export default Portfolio;