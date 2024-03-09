import { Cinzel_Decorative, Damion } from 'next/font/google'
 
const cinzel = Cinzel_Decorative({
 weight:['400','700','900'],
  subsets: ['latin'],
  display: 'swap',
})

const damion = Damion({
 weight:['400'],
  subsets: ['latin'],
  display: 'swap',
})

export {cinzel,damion}