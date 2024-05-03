import FullButton from "../fullButton/FullButton";
import './Services.css';

const ServiceMobile = () => {
    return (
        <div>
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                <div className="p-8 sm:p-10 lg:flex-auto">
                    <h3 className="text-2xl font-bold tracking-tight text-darkBlue">Application Android simple</h3>
                    <p className="mt-6 text-base leading-7 text-gray-600">Application Android basique tel qu'une vitrine pour votre shop.</p>
                    <div className="mt-10 flex items-center gap-x-4">
                        <h4 className="flex-none text-sm font-semibold leading-6 text-darkBlue">Inclut</h4>
                        <div className="h-px flex-auto bg-gray-100"></div>
                    </div>
                    <ul role="list" className="text-left mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                        <li className="flex gap-x-3">
                            <svg className="h-6 w-5 flex-none text-darkBlue" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                            5 écrans
                        </li>
                        <li className="flex gap-x-3">
                            <svg className="h-6 w-5 flex-none text-darkBlue" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                            Fonctionnalités simples
                        </li>
                        <li className="flex gap-x-3">
                            <svg className="h-6 w-5 flex-none text-darkBlue" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                            3 révisions
                        </li>
                        <li className="flex gap-x-3">
                            <svg className="h-6 w-5 flex-none text-darkBlue" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                            Réalisé en 10 jours
                        </li>
                    </ul>
                </div>
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="h-full rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                        <div className="mx-auto w-full max-w-xs px-8">
                            <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                <span className="text-5xl font-bold tracking-tight text-gray-900">300€</span>
                            </p>
                            <div className="buttonService">
                                <FullButton name="Contact" to="/contact" txt="Choisir ce pack" message={ '"Bonjour, J' + "'" + 'aimerais discuter avec vous du pack Application Android simple, pouvons-nous prendre rendez-vous par visio dans les jours à venir ?"' } color="darkBlue" />
                            </div>
                            <p className="mt-6 text-xs leading-5 text-gray-600">Prix TTC</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                <div className="p-8 sm:p-10 lg:flex-auto">
                    <h3 className="text-2xl font-bold tracking-tight text-darkBlue">Application Android standard</h3>
                    <p className="mt-6 text-base leading-7 text-gray-600">Application Android standard avec intégration d'API.</p>
                    <div className="mt-10 flex items-center gap-x-4">
                        <h4 className="flex-none text-sm font-semibold leading-6 text-darkBlue">Inclut</h4>
                        <div className="h-px flex-auto bg-gray-100"></div>
                    </div>
                    <ul role="list" className="text-left mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                        <li className="flex gap-x-3">
                            <svg className="h-6 w-5 flex-none text-darkBlue" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                            10 écrans
                        </li>
                        <li className="flex gap-x-3">
                            <svg className="h-6 w-5 flex-none text-darkBlue" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                            Fonctionnalités simples
                        </li>
                        <li className="flex gap-x-3">
                            <svg className="h-6 w-5 flex-none text-darkBlue" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                            Fonctionnalités réseaux simples
                        </li>
                        <li className="flex gap-x-3">
                            <svg className="h-6 w-5 flex-none text-darkBlue" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                            5 révisions
                        </li>
                        <li className="flex gap-x-3">
                            <svg className="h-6 w-5 flex-none text-darkBlue" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                            Code source fourni
                        </li>
                        <li className="flex gap-x-3">
                            <svg className="h-6 w-5 flex-none text-darkBlue" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                            Gestion de la publication*
                        </li>
                        <li className="flex gap-x-3">
                            <svg className="h-6 w-5 flex-none text-darkBlue" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                            Réalisé en 20 jours
                        </li>
                    </ul>
                </div>
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="h-full rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                        <div className="mx-auto w-full max-w-xs px-8">
                            <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                <span className="text-5xl font-bold tracking-tight text-gray-900">600€</span>
                            </p>
                            <div className="buttonService">
                                <FullButton name="Contact" to="/contact" txt="Choisir ce pack" message={ '"Bonjour, J' + "'" + 'aimerais discuter avec vous du pack Application Android standard, pouvons-nous prendre rendez-vous par visio dans les jours à venir ?"' } color="darkBlue" />
                            </div>
                            <p className="mt-6 text-xs leading-5 text-gray-600">Prix TTC<br />*L'application sera téléchargée sur le Play Store avec un compte développeur que vous aurez fourni.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                <div className="p-8 sm:p-10 lg:flex-auto">
                    <h3 className="text-2xl font-bold tracking-tight text-darkBlue">Application Android avancée</h3>
                    <p className="mt-6 text-base leading-7 text-gray-600">Application Android personnalisée avec API, SDK et backends pour applications complexes et avancées.</p>
                    <div className="mt-10 flex items-center gap-x-4">
                        <h4 className="flex-none text-sm font-semibold leading-6 text-darkBlue">Inclut</h4>
                        <div className="h-px flex-auto bg-gray-100"></div>
                    </div>
                    <ul role="list" className="text-left mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                        <li className="flex gap-x-3">
                            <svg className="h-6 w-5 flex-none text-darkBlue" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                            20 écrans
                        </li>
                        <li className="flex gap-x-3">
                            <svg className="h-6 w-5 flex-none text-darkBlue" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                            Fonctionnalités complexes
                        </li>
                        <li className="flex gap-x-3">
                            <svg className="h-6 w-5 flex-none text-darkBlue" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                            Fonctionnalités réseaux complexes
                        </li>
                        <li className="flex gap-x-3">
                            <svg className="h-6 w-5 flex-none text-darkBlue" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                            20 révisions
                        </li>
                        <li className="flex gap-x-3">
                            <svg className="h-6 w-5 flex-none text-darkBlue" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                            Code source fourni
                        </li>
                        <li className="flex gap-x-3">
                            <svg className="h-6 w-5 flex-none text-darkBlue" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                            Gestion de la publication*
                        </li>
                        <li className="flex gap-x-3">
                            <svg className="h-6 w-5 flex-none text-darkBlue" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                            Réalisé en 1 mois
                        </li>
                    </ul>
                </div>
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="h-full rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                        <div className="mx-auto w-full max-w-xs px-8">
                            <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                <span className="text-5xl font-bold tracking-tight text-gray-900">1 100€</span>
                            </p>
                            <div className="buttonService">
                                <FullButton name="Contact" to="/contact" txt="Choisir ce pack" message={ '"Bonjour, J' + "'" + 'aimerais discuter avec vous du pack Application Android avancée, pouvons-nous prendre rendez-vous par visio dans les jours à venir ?"' } color="darkBlue" />
                            </div>
                            <p className="mt-6 text-xs leading-5 text-gray-600">Prix TTC<br />*L'application sera téléchargée sur le Play Store avec un compte développeur que vous aurez fourni.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceMobile