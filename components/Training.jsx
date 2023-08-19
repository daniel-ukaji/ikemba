import Image from 'next/image'
import React from 'react'

function Training() {
  return (
    <div className='max-w-6xl mx-auto pb-10 mt-20'>
        <div className='flex justify-between items-center space-x-14 mt-10'>
            <div className=''>
                <h1 className={`font-semibold text-4xl `}>Training and Mentorship</h1>
                <p className="mt-4 mb-10 text-lg">Dedicated to building a strong network of credible African traders who have the capacity to meet the global demand for African products, through partnerships.</p>
                <div className="border w-20 border-[#DC4D04]"></div>
            </div>
            <div className='w-full'>
                <Image alt='' src="https://www.tradersofafrica.com/static/media/lp-2.d4c54394928eafd9a561.png"  objectFit='cover' width="500" height="500" className=''   />
            </div>
        </div>
    </div>
  )
}

export default Training