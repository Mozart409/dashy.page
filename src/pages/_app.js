import fetch from 'node-fetch'
global.fetch = fetch
import '../style.css'

function MyApp ({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
