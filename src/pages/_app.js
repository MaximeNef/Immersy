import Script from 'next/script'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script id="uxwizz">
        UST_CT = []; UST =
        {'s: Date.now(), addTag: function(tag) {UST_CT.push(tag)}'}
        ;UST.addEvent = UST.addTag;
      </Script>
      <Script
        src="https://stats.listri.digital/server/ust.min.js?v=4.5.0"
        async
      ></Script>
      <Component {...pageProps} />
    </>
  )
}
