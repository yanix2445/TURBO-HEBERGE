import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const hebergement = () => {
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

            <section className='hebergement'>
                <div className="container-hebergement">
                    <div className="row">
                        <div className="col">
                            <Link href="/hebergement__cloud">
                                <img
                                    src='/HEBERGEMENT-CLOUD.png' alt='imahe du logo'
                                    width={200}
                                    height={200} />
                                <h3>L’HÉBERGEMENT CLOUD</h3>
                                <p>Contrairement à l’hébergement mutualisé, l’hébergement dédié et l’hébergement VPS, l’hébergement Cloud ne repose pas sur un serveur mais sur une multitude de serveurs et le client paye pour ce qu’il utilise vraiment, ce qui permet une flexibilité accrue.
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link href="/hebergement__vps">
                                <img
                                    src='/HEBERGEMENT-VPS.png' alt='imahe du logo'
                                    width={200}
                                    height={200} />
                                <h3>L’HÉBERGEMENT VPS</h3>
                                <p>L’hébergement VPS (Serveur Virtuel Privé) est un système hybride à mi-chemin entre l’hébergement mutualisé et l’hébergement dédié. Le VPS consiste en effet à créer plusieurs serveurs virtuels sur un même serveur réel
                                </p>
                            </Link>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link href="/hebergement__dedie">
                                <img
                                    src='/HEBERGEMENT-DEDIER.png' alt='imahe du logo'
                                    width={300}
                                    height={200} />
                                <h3>L’HÉBERGEMENT DEDIE</h3>
                                <p>L’hébergement dédié consiste à louer auprès d’un hébergeur web un serveur complet qu’il est ensuite possible de configurer selon ses besoins.
                                </p>
                            </Link>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link href="/hebergement__mutualiser">
                                <img
                                    src='/hebergement-mutualise.png' alt='imahe du logo'
                                    width={200}
                                    height={200} />
                                <h3>L’HÉBERGEMENT MUTUALISE</h3>
                                <p>L’hébergement mutualisé consiste à se partager à plusieurs un seul et même serveur.
                                </p>
                            </Link>
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

export default hebergement;