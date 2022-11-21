import React from 'react';
import Head from 'next/head';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const panier = () => {
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
            <footer>
                <Footer />
            </footer>
          

        </>
    );
};

export default panier;