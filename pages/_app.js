import { RecoilRoot } from 'recoil'
import '../styles/globals.css'
import '../public/styles/animation.css'
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'
import { ParallaxProvider } from 'react-scroll-parallax';

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
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </RecoilRoot>
  )
}

export default MyApp

// https://www.freepik.com/premium-photo/smiling-beautiful-asian-woman-casual-shirt-showing-peace-sign-gesture-looking-camera-isolated-white-background_28135584.htm#page=21&query=islamic%20camera&position=6&from_view=keyword
