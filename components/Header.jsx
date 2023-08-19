import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div>
        <div className="flex justify-between max-w-6xl mx-auto py-4 items-center">
            {/* <h1 className="font-bold text-lg">TOFA</h1> */}
            <Image src="https://www.tradersofafrica.com/static/media/logo.7cc11cc2241ffeac3344.png" alt="" width="100" height="100" />
            <div className="flex space-x-8 items-center text-sm">
                <Link href="/"><p>Home</p></Link>
                <Link href="/story"><p>Our story</p></Link>
                <p>What we do</p>
                <p>Our Impact</p>
                <p>Buy Commodities</p>
                <Link href="" className="border py-2 bg-[#DC4D04] px-6 rounded-md text-white">Marketplace</Link>
            </div>
        </div>
    </div>
  )
}

export default Header