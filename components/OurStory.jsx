import Image from 'next/image'
import React from 'react'

function OurStory() {
  return (
    <div className="flex max-w-6xl mx-auto mt-10">
        <div className="">
            <h1 className="font-bold text-xl mb-5">Our Story</h1>
            <p className="mb-5">It all started because of groundnuts! Remember, there used to be groundnut pyramids in Kano and other cities in Northern Nigeria. Tens of thousands of groundnut sacks stacked up in pyramid-like structures. Now, imagine not being able to find groundnuts today in large quantities anywhere in Nigeria and Africa as a whole. That exactly how Uju felt right before she started TOFA.</p>

            <div className="border-l-2 border-[#DC4D04] p-5">
                <p className="text-lg">There is an urgent need to expose to Africans what is obtainable in our locality and from our surroundings, as well as showcase African products to the rest of the world. - Uju Uzo-Ojinnaka</p>
            </div>

            <div className="flex space-x-5 mt-5 items-center">
                <Image alt='' src="https://www.tradersofafrica.com/static/media/dark-play-btn.4f1b03adb94687bacfea10bf66b3677b.svg"  objectFit='cover' width="50" height="50" className=''   />
                <p className="text-sm">Watch the Groundnut Story</p>
            </div>
        </div>
        <div className="w-[200rem]">
            <Image alt='' src="https://www.tradersofafrica.com/static/media/about-bg.5c11b5afcfe4e9c97698.png"  objectFit='cover' width="400" height="400" className=''   />
        </div>
    </div>
  )
}

export default OurStory