import Image from 'next/image'
import React from 'react'

function Products() {
  return (
    <div className="max-w-6xl mx-auto mt-10 mb-10">
        <h1 className="font-medium text-2xl mb-3">Products we are focused on</h1>
        <p className="mb-14">Over the years, Trader of Africa has built the expertise needed to establish ourselves as leaders across many different kinds of African products. Our main focus is on the following categories.</p>
        <div className="flex justify-between items-center space-x-7">
            <Image src="https://www.tradersofafrica.com/static/media/pf-1.69d66f6231a80869f178.png" alt="" objectFit='cover' width="350" height="300" className='' />
            <Image src="https://www.tradersofafrica.com/static/media/pf-2.6f2d8fb4cf1d90b9729c.png" alt="" objectFit='cover' width="350" height="300" className='' />
            <Image src="https://www.tradersofafrica.com/static/media/pf-3.881fd8d1bf75d3f5aea5.png" alt="" objectFit='cover' width="350" height="300" className='' />
        </div>
    </div>
  )
}

export default Products