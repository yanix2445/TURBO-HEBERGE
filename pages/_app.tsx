import '../styles/globals.scss'
import '../styles/navbar.scss'
import '../styles/hero__avatar.scss'
import '../styles/footer.scss'
import '../styles/connexion.scss'
import '../styles/inscription.scss'
import '../styles/map.scss';
import '../styles/hebergement.scss';
import '../styles/hebergement-cloud.scss';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps, }: AppProps) {
  return <Component {...pageProps} />
}
