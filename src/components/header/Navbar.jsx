import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

const navigation = [
    { name: 'Accueil', href: '/', current: true },
    { name: 'Services', href: '/services', current: false },
    { name: 'Portfolio', href: '/portfolio', current: false },
    { name: 'Contact', href: '/contact', current: false },
]

const title = 'AU <...> PROGRAMME';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='bg-lightGray fixed w-full z-50 border-b border-solid'>
            <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-center text-lightBlack">
                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                        {/* Mobile menu button*/}
                        <button onClick={toggleMenu} className="relative inline-flex items-center justify-center rounded-md p-2 text-lightBlack hover:bg-lightBlack hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            {/*<span className="absolute -inset-0.5" />*/}
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                    <div className="absolute inset-y-0 md:left-0 flex items-center">
                        <NavLink
                            key="Accueil"
                            to="/">
                            <h1 className="text-lg font-bold h-auto w-auto font-title">{title}</h1>
                        </NavLink>
                        
                    </div>

                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-center">
                        <div className="hidden md:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.href}
                                        className='link'
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu deroulant mobile */}
            <div className={isOpen ? 'openMenu' : 'closeMenu'}>
                <div className='space-y-1 px-2 pb-3 pt-2'>
                    {navigation.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            className='linkMobile'
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar