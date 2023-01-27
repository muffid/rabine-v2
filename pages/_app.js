import { RecoilRoot } from 'recoil'
import '../styles/globals.css'
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'

const progress = new ProgressBar({
  size:2,
  color:'#FE595E',
  className:'z-50',
  delay:50,
})

Router.events.on('routeChangeStart',progress.start)
Router.events.on('routeChangeComplete',progress.finish)

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
