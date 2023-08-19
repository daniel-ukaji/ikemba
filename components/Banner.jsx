// import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[600px]'>
        <Image 
            src="https://www.tradersofafrica.com/static/media/home.c4808ae8f9f2d48876fd.jpg"
            layout="fill"
            objectFit="cover"
            alt=''
            className="object-cover"
        />
        <div className='absolute top-1/4 left-48'>
            <p className='text-6xl text-white leading-tight'>A Pan African Hub<br /> Facilitating African Trade</p>
            <p className="text-lg text-white mb-14" >With a Global Breadth and African Depth, We are Bridging<br /> the Gaps in Trade with and within Africa.</p>
        
            <Link href="" className="py-3 bg-[#DC4D04] px-10 rounded-md text-white">Learn more  </Link>
        </div>
    </div>
  )
}

export default Banner