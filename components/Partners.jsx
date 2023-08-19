import Image from 'next/image'
import React from 'react'

function Partners() {
  return (
    <div className="max-w-6xl mx-auto mt-40 mb-20">
        <h1 className="font-medium text-2xl mb-3">Our Partners</h1>
        <p className="mb-14">As we grow our business, we consider strategic partnerships as the foundation through which we operate across Africa. We are establishing partnerships in areas of trade, logistics, financing, and human resources.</p>
        <div className="flex justify-between items-center">
            <Image src="https://www.tradersofafrica.com/static/media/pia-logo.a4b629f40e1dcc4d75f98f7d51ac7f2b.svg" alt="" objectFit='cover' width="150" height="150" className='' />
            <Image src="https://www.tradersofafrica.com/static/media/sipi-logo.163a131c0f8b96a369c3.png" alt="" objectFit='cover' width="150" height="150" className='' />
            <Image src="https://www.tradersofafrica.com/static/media/eagrib-logo.a9cc9bb9034c7f5280f6.png" alt="" objectFit='cover' width="150" height="150" className='' />
            <Image src="https://www.tradersofafrica.com/static/media/ati-logo.fb61febb1f8d71c7c2c0.png" alt="" objectFit='cover' width="150" height="150" className='' />
            <Image src="https://www.tradersofafrica.com/static/media/shecluded-logo.e658fff993222b513d94.png" alt="" objectFit='cover' width="150" height="150" className='' />
            <Image src="https://www.tradersofafrica.com/static/media/iverify-logo.0c95030d7f56030b626c.png" alt="" objectFit='cover' width="150" height="150" className='' />
        </div>
    </div>
  )
}

export default Partners