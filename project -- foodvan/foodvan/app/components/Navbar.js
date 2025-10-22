"use client";
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
    const { data: session } = useSession();
    const pathname = usePathname();
    const showNavbar = ["/"].includes(pathname);
    return (<>
        {showNavbar && <nav className='absolute bg-transparent z-20 w-full flex justify-between items-center px-10'>

            <div className="logo">
                <Link href={"/"}><span className='font-bold text-gray-50 text-5xl'>Arigato</span></Link>
            </div>
            <div className='flex space-x-4 p-4 '>
                {session ? <button className='bg-transparent border-[1px] border-white text-white p-4 py-2 rounded-lg text-xl font-semibold'>{session.user.email}</button> : <Link href={"/login"} className='bg-transparent border-[1px] border-white text-white p-4 py-2 rounded-lg text-xl font-semibold'>Login</Link>}
                {!session && <Link href={"/signup"} className='bg-transparent border-[1px] border-white text-white p-4 py-2 rounded-lg text-xl font-semibold'>Sign Up</Link>}
                {session ? <Link href={"/"} onClick={()=> signOut()} className='bg-transparent border-[1px] border-white text-white p-4 py-2 rounded-lg text-xl font-semibold'>Logout</Link> : <Link href={"/guest"} className='bg-transparent border-[1px] border-white text-white p-4 py-2 rounded-lg text-xl font-semibold'>Guest</Link>}

            </div>

        </nav>}
        </>
    )
}

export default Navbar
