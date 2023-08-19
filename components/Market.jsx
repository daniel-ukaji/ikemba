import Image from 'next/image'
import React from 'react'

function Market() {
  return (
    <div className='max-w-6xl mx-auto pb-10 mt-20'>
        <div className='flex justify-between items-center flex-row-reverse mt-10'>
            <div className=''>
                <h1 className={`font-semibold text-4xl `}>Market Intelligence</h1>
                <p className="mt-4 mb-10 text-lg">Through our activities and technology, we are able to provide reliable data across several African products.</p>
                <div className="border w-20 border-[#DC4D04]"></div>
            </div>
            <div className='w-full'>
                <Image alt='' src="https://www.tradersofafrica.com/static/media/lp-3.af85bcdc9fd68654091a.png"  objectFit='cover' width="400" height="400" className=''   />
            </div>
        </div>
    </div>
  )
}

export default Market