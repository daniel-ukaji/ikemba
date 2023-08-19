import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import About from '@/components/About'
import Visibility from '@/components/Visibility'
import Training from '@/components/Training'
import Market from '@/components/Market'
import Products from '@/components/Products'
import Partners from '@/components/Partners'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Visibility />
      <Training />
      <Market />
      <Products />
      <Partners />
      <Footer />
    </div>
  )
}
