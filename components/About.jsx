import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function About() {
  return (
    <div className='max-w-6xl mx-auto pb-10 mt-20'>
        <div className='flex justify-between items-center space-x-64 mt-10'>
            <div className=''>
                <h1 className={`font-semibold text-4xl `}>What we do</h1>
                <p className="mt-4 mb-5">Our mission and core business are clearly represented by our name Traders of Africa. We pride ourselves as African trade harbingers.</p>
                <p>Through our industry expertise and experience, we strive to continually facilitate trade with and within Africa by providing a safe platform dedicated to solving issues of trust and acceptable payment terms for both buyers and African suppliers.</p>
                <div className='flex mt-7'>
                    <Link href="" className="py-2 bg-[#DC4D04] px-10 rounded text-white">Read more  </Link>
                </div>
            </div>
            <div className='w-full'>
                <Image alt='' src="https://www.tradersofafrica.com/static/media/tst.3240f09461d7c8be7ca7.jpg"  objectFit='cover' width="300" height="300" className=''   />
            </div>
        </div>
    </div>
  )
}

export default About