import React from 'react'
import Head from 'next/head'
import Logo from '../components/Logo'
import Navbar from '../components/Navbar'
import Hero__avatar from '../components/Hero__avatar'
import Footer from '../components/Footer'


const index = () => {
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

      <section className="accuueille">
        <div className="container">

          <div className="hero__item left ">
            <h4>L'Hébergement Web</h4>
            <h2>Hébergement Web flexible performant et sûr</h2>
            <ul className='hero__ul'>
              <li>
                <svg width="15"height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                </svg>
                Certificat SSL et protection DDoS
              </li>
              <li>
                <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                </svg>
                Sauvegardes et restauration des données
              </li>
              <li>
              <svg width="15"height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                </svg>
                Assistance 24/7 et conseiller personnel
              </li>
            </ul>
          </div>
          <div className="hero__item right ">
            <Hero__avatar />
          </div>
        </div>

      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default index;