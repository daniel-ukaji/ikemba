import React from 'react'

function BlackBanner() {
  return (
    <div className="bg-[#282828] pt-10 pb-10 mt-10 mb-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 divide-x">
            <div className="p-10">
                <h1 className="text-sm mb-5 text-white">Our Mission</h1>
                <p className="text-xl text-white">The big mission for Traders of Africa is to facilitate trade across the 54 countries in Africa, through strategic partnerships</p>
            </div>
            <div className="p-10">
                <h1 className="text-sm mb-5 text-white">Our Vision</h1>
                <p className="text-xl text-white">To be a point of convergence for qualitative trade with Africa and creating access to market for 2,000,000 African traders by 2025.</p>
            </div>
        </div>
    </div>
  )
}

export default BlackBanner