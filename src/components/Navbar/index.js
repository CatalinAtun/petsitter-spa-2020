import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import DehazeIcon from '@material-ui/icons/Dehaze';

const Navbar = () => {
    const [showToggleMenu, setShowToggleMenu] = useState(false);

    const showToggle = () => {
        setShowToggleMenu(!showToggleMenu)
    }

    return (
        <nav className="flex items-center bg-gray-800 p-3 flex-wrap">
            <a href="/" className="p-2 mr-4 inline-flex items-center"><img src={logo} /></a>
            <button className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto" onClick={() => showToggle()}>
                <DehazeIcon />
            </button>
            <div className={`top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto ${!showToggleMenu ? "hidden" : ""} `}>
                <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
                    <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white" href="/">Inicio</a>
                    <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white" href="/take-hours">Toma de horas</a>
                    <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white" href="/cotiseichon">Cotizador</a>
                </div>
            </div>
        </nav>)
}

export default Navbar;