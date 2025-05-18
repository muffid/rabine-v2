import { Cinzel_Decorative, Damion, Stalemate, Forum, Poppins, Inter } from 'next/font/google'
 
const cinzel = Cinzel_Decorative({
 weight:['400','700','900'],
  subsets: ['latin'],
  display: 'swap',
})
const poppins = Poppins({
 weight:['400','700','900'],
  subsets: ['latin'],
  display: 'swap',
})

const damion = Damion({
 weight:['400'],
  subsets: ['latin'],
  display: 'swap',
})

const stalemate = Stalemate({
 weight:['400'],
  subsets: ['latin'],
  display: 'swap',
})

const forum = Forum({
 weight:['400'],
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  weight : ['400'],
  subsets: ['latin'],
  display: 'swap',
})


export {cinzel,damion,stalemate,forum,poppins,inter}