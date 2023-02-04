import {useRouter} from 'next/router'
 import '../styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return <main className={`z-[-1] `}>
  {/* // bg-cover ${pathname === '' || pathname === '/' ? "bg-[url('/assets/images/bg/mobile.png')]" : "bg-[url('/assets/images/bg/general.png')]"} */}
  <Header />
    {/* <div className="absolute z-[-1] bg-cover h-screen w-screen bg-[url('/assets/images/bg/Banner.png')] 3xl:bg-[length:100%_100%] sm:bg-cover">
    </div> */}
    <section className='pt-20 pb-10 sm:pb-22'>
      <Component {...pageProps} />
      </section>
   
  <Footer />
  </main>
}

export default MyApp
