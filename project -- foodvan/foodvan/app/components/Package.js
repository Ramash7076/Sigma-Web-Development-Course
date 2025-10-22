import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const Package = ({ name, src, alt }) => {
    const searchParams = useSearchParams()
    return (
        <Link href={`/${name}`} className='w-35 h-50 relative  border-[0.2px] border-gray-300  shadow-md rounded-md'>
            <div className='flex justify-center items-center pt-5 '>
                <img className='object-contain' height={100} width={100} src={src} alt={alt} />
            </div>
            <div className='absolute top-35 px-3'>
            <h2 className='text-center font-medium text-gray-700 px-3'>{name}</h2>
            </div>
            
        </Link>
    )
}

export default Package
