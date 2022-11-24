import React from 'react';
import Link from 'next/link';
import localisation from '../pages/localisation';
import connexion from '../pages/connexion';
import panier from '../pages/panier';
import hebergement from '../pages/hebergement';


const Navbar = () => {
    return (
        <>
            <ul className='navbar'>
                <li>
                    <div className="container-recherch">
                        <input type="text" placeholder="Search..."></input>
                        <div className="search"></div>
                    </div>
                </li>

                <li>
                    <Link href="/">Home</Link>
                </li>

                {/* <li>
                    <Link href="/formule">Formule</Link>
                </li> */}

                <li>
                    <Link href="/hebergement">Hébergement</Link>
                </li>

                <li>
                    <Link href="/localisation">Localisation</Link>
                </li>

                <li>
                    <Link href="/connexion">Connexion</Link>
                </li>

                <li>
                    <Link href="/panier">
                        <svg width="35" height="35" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64">
                            <path className="cls-1" d="M58.83,49.53,56.27,22.59a4.08,4.08,0,0,0-4.08-3.7H46.54v-1.6a14.54,14.54,0,0,0-29.08,0v1.6H11.81a4.08,4.08,0,0,0-4.08,3.7L5.17,49.53A10.69,10.69,0,0,0,15.82,61.25H48.18A10.69,10.69,0,0,0,58.83,49.53ZM20,17.29a12,12,0,1,1,24.08,0v1.6H20ZM54.25,56.06a8.22,8.22,0,0,1-6.07,2.69H15.82a8.22,8.22,0,0,1-8.17-9l2.57-26.93a1.59,1.59,0,0,1,1.59-1.44H52.19a1.59,1.59,0,0,1,1.59,1.44l2.57,26.93A8.25,8.25,0,0,1,54.25,56.06Z" id="id_101">
                            </path>
                            <path className="cls-2" d="M45.29,27.61A1.25,1.25,0,0,0,44,28.86v2.85a12,12,0,1,1-24.08,0V28.86a1.25,1.25,0,0,0-2.5,0v2.85a14.54,14.54,0,1,0,29.08,0V28.86A1.25,1.25,0,0,0,45.29,27.61Z" id="id_102">
                            </path>
                        </svg>
                    </Link>
                </li>
            </ul>
        </>
    );
};

export default Navbar;