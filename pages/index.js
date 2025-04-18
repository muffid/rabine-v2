import Head from 'next/head'
import Features from '../components/index/Features'
import Hero from '../components/index/Hero'
import Navbar from '../components/index/Navbar'
// import Pricing from '../components/index/Pricing'
import SampleProduct from '../components/index/SampleProduct'
// import fitur from'../source/dataFitur.json'
import BlogFeed from '../components/index/BlogFeed'
import { useRecoilState } from 'recoil'
import { navState } from '../recoil/navState'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from '../components/globals/Footer'
require('dotenv').config();
import { graphQLClient,endpoint } from '../lib/graphql-client'
import { GET_PRODUCTS } from '../lib/product-queries'
import FloatingChat from '../components/globals/Floating-Chat'





function Home({products}) {

  const [menuActive,setMenuActive] = useRecoilState(navState)
  const intersect='20vw'
  const duration = 0.4
  const style = 'easeOut'

  useEffect(()=>{
    const element = document.getElementById(`content${menuActive}`)
    element.scrollIntoView({behavior:'smooth'})
  
  },[menuActive])

  return (
    <div className='w-full base bg-gradient-to-b from-purple-50/50 to-blue-50'>

      <FloatingChat phoneNumber='+62 878-4686-7493' // Required
                    accountName='Muffid Mahnun' // Optional
                    avatar='https://i.ibb.co.com/wLpTx9t/IMG-0013-GREEN.jpg' // Optional
                    initialMessageByServer='Hi, Apa yang bisa dibantu?' // Optional
                    statusMessage='Available' // Optional
                    placeholder='Write here...' // Optional
                    allowEsc={true} // Optional
                    notificationDelay={8}
                    notification={true}
      />
      
      <Head>
        <title>Rabine.id - Undangan Pernikahan Online | Modern & Elegant Design</title>
        <meta charSet='utf-8'/>
        <meta name='description' content='Rabine.id - Undangan Pernikahan Online | Modern & Elegant Design' />
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
        <meta name='description' content='Sebar Undangan jadi makin gampang, segampang tinggal klik. yuk, ganti undangan kertasmu ke undangan digital'  />
        <meta content='Rabine.id' name='keywords'/>
        <meta name='keywords' content='rabine, rabine.id, undangan online, undangan pernikahan online, undangan web, web pernikahan'/>
        {/* <meta property='og:image' content='http://contentmanagement.cendikabangsa.sch.id/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-23-at-17.04.06.jpeg' /> */}
        {/* <meta property='og:image:width' content='400' />
        <meta property='og:image:height' content='300' /> */}
        <meta property='og:locale' content='en_US'  />
        <meta property='og:type' content='website'  />
        <meta property='og:title' content='Rabine.id - Undangan Pernikahan Online | Modern & Elegant Design'  />
        <meta property='og:description' content='Sebar Undangan jadi makin gampang, segampang tinggal klik. yuk, ganti undangan kertasmu ke undangan digital'  />
        <meta property='og:url' content='https://rabine.id/'  />
        <meta property='og:site_name' content='Rabine'  />
        <link rel='icon' href='/rbn.ico' />
      </Head>
      <Navbar />
      <main className='w-full mx-auto px-6 md:px-12 max-w-[1200px] bg-white/80 py-[50px]'>
      
        <div className='flex flex-col itc justify-center'>
            <Hero id={1} />
        </div>
      
        <motion.div
            initial={{ opacity: 0,y:intersect }}
            whileInView={{ opacity: 1,y:0 }}
            viewport={{ once: true }}
            transition={{duration:duration,ease:'circOut'}}
        >
          <Features/>
        </motion.div>
        {/* <motion.div
            initial={{ opacity: 0,y:intersect }}
            whileInView={{ opacity: 1,y:0 }}
            viewport={{ once: true }}
            transition={{duration:duration,ease:style}}
        >
        <Pricing id={3} fitur={fitur}/>
        </motion.div> */}
      </main>
      <motion.div
            initial={{ opacity: 0,y:intersect }}
            whileInView={{ opacity: 1,y:0 }}
            viewport={{ once: true }}
            transition={{duration:duration,ease:style}}
        >
      {/* <LatestProd data={dataLatest.undangan}/> */}
      </motion.div>
      <main className='w-full mx-auto  md:px-12 max-w-[1300px]'>
      <motion.div
            initial={{ opacity: 0,y:intersect }}
            whileInView={{ opacity: 1,y:0 }}
            viewport={{ once: true }}
            transition={{duration:duration,ease:style}}
        >
        <SampleProduct data={products} id={5}/>
       
        </motion.div>
      </main>
      <motion.div
            initial={{ opacity: 0,y:intersect }}
            whileInView={{ opacity: 1,y:0 }}
            viewport={{ once: true }}
            transition={{duration:duration,ease:style}}
        >
      <BlogFeed id={6}/>
      </motion.div>
    <Footer/>
    </div>
  )
}


// export async function getServerSideProps() {

//   const url = process.env.API_URL_PROD
//   const res = await fetch(url+'product/', {
//     headers: {
//       Authorization: 'Bearer XXUiop67RTfr45GTJU90CFR'
//     }
//   })
//   const dataApi = await res.json()
//   return { props: { dataApi } }
// }

export async function getServerSideProps() {
  const data = await graphQLClient.request(GET_PRODUCTS);
  return {
    props: {
      products: data.presets,
    },
  };
}

export default Home;
