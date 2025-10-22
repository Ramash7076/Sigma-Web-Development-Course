"use client"
import React from 'react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

const Guest = () => {
  const { data: session } = useSession();


  return (<>
    {session ? <div>
      <nav className='bg-amber-600 z-20 w-full flex justify-between items-center px-10'>

        <div className="logo">
          <Link href={"/"}><span className='font-bold text-gray-50 text-5xl'>Arigato</span></Link>
        </div>
        <div className='flex space-x-4 p-4 '>
          <button className='bg-transparent border-[1px] border-white text-white p-4 py-2 rounded-lg text-xl font-semibold'>{session.user.email}</button>
          <Link href={"/"} onClick={() =>  signOut()} className='bg-transparent border-[1px] border-white text-white p-4 py-2 rounded-lg text-xl font-semibold'>Logout</Link>

        </div>

      </nav>
    </div>
      : <nav className='bg-amber-600 z-20 w-full flex justify-between items-center px-10'>

        <div className="logo">
          <Link href={"/"}><span className='font-bold text-gray-50 text-5xl'>Arigato</span></Link>
        </div>
        <div className='flex space-x-4 p-4 '>
          <button className='bg-transparent border-[1px] border-white text-white p-4 py-2 rounded-lg text-xl font-semibold'>Guest</button>


        </div>

      </nav>}

      

  </>)
}

export default Guest
