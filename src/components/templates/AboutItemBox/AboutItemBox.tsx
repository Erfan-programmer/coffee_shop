import Image from 'next/image'
import React from 'react'

export type aboutItemDes = {
    image:string,
    description:string,
    sub_description:string
}
const AboutItemBox = ({image , description , sub_description}:aboutItemDes) => {
  return (
    <div className='flex flex-col justify-center items-start text-[#212121]'>
        <div className="w-24 h-24">
            <Image src={image}  width={100} height={100} alt="" loading='lazy'/>
        </div>
        <div className="description text-2xl font-black mb-4">
            <p>{description}</p>
        </div>
        <div className="sub_des max-w-72  text-[#171717]">
            <span>{sub_description}</span>
        </div>
    </div>
  )
}

export default AboutItemBox