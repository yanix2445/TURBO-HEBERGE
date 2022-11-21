import Head from 'next/head'
import Link from 'next/link';
import React from 'react';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';

const hebergemnt__vps = () => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="TurboHeberge L'hebergeur qui s adapta a tes besoins avec une securiter elever et une rapider defiant toute concurance  " />
                <link rel="shortcut icon" href="/Logo.png" type="image/x-icon"></link>
                <title>TurboHéberge</title>
            </Head>

            <header className='header'>
                <div className="container d-flex">
                    <Logo />
                    <Navbar />
                </div>
            </header>

            <section className='hebergement__cloud'>

                <div className="row">
                    <div className="col1">
                        <Link href="/hebergement">
                            <img
                                src='/HEBERGEMENT-VPS.png' alt='imahe du logo'
                                width={200}
                                height={200}
                            />
                            <h3>L’HÉBERGEMENT VPS</h3>

                            <p>L’hébergement VPS (Serveur Virtuel Privé) est un système hybride à mi-chemin entre l’hébergement mutualisé et l’hébergement dédié. Le VPS consiste en effet à créer plusieurs serveurs virtuels sur un même serveur réel
                            </p>
                        </Link>
                    </div>
                </div>

                <div className="row">
                    <div className="col2">

                        <div id="pricing-table" className="clear">
                            <div className="plan">
                                <h3>Enterprise<span>$59</span></h3>
                                <a className="signup" href="">Sign up</a>
                                <ul>
                                    <li><b>10GB</b> espace disque</li>
                                    <li><b>100GB</b> Bande passante</li>
                                    <li><b>20</b> Compte Email</li>
                                    <li><b>Ilimiter</b> sous-domaine</li>
                                </ul>
                            </div>
                            <div className="plan" id="most-popular">
                                <h3>Professional<span>$29</span></h3>
                                <a className="signup" href="">Sign up</a>
                                <ul>
                                    <li><b>5GB</b> espace disque</li>
                                    <li><b>50GB</b> Bande passante</li>
                                    <li><b>10</b> Compte Email</li>
                                    <li><b>Ilimiter</b> sous-domaine</li>
                                </ul>
                            </div>
                            <div className="plan">
                                <h3>Standard<span>$17</span></h3>
                                <a className="signup" href="">Sign up</a>
                                <ul>
                                    <li><b>3GB</b> espace disque</li>
                                    <li><b>25GB</b> Bande passante</li>
                                    <li><b>5</b> Compte Email</li>
                                    <li><b>Ilimiter</b> sous-domaine</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <Footer />
            </footer>

        </>
    );
};

export default hebergemnt__vps;