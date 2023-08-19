import Image from 'next/image'
import React from 'react'

function Visibility() {
  return (
    <div className='max-w-6xl mx-auto pb-10 mt-20'>
        <div className='flex justify-between items-center flex-row-reverse mt-10'>
            <div className=''>
                <h1 className={`font-semibold text-4xl `}>Visibility and Access</h1>
                <p className="mt-4 mb-10 text-lg">We are showcasing African products to buyers all over the world, while providing access to local and international markets for African suppliers.</p>
                <div className="border w-20 border-[#DC4D04]"></div>
            </div>
            <div className='w-full'>
                <Image alt='' src="https://www.tradersofafrica.com/static/media/lp-1.13444d14dc92c6c59cb6.png"  objectFit='cover' width="500" height="500" className=''   />
            </div>
        </div>
    </div>
  )
}

export default Visibility