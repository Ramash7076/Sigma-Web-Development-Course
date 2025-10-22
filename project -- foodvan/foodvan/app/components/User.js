"use client";
import React from 'react'
import Link from "next/link"
import { signOut, useSession } from "next-auth/react";
import Card from './Card';
import Package from './Package';

const User = () => {
    const { data: session } = useSession();
    return (
        <div>
            <nav className=' bg-amber-600  z-20 w-full flex justify-between items-center px-10'>

                <div className="logo">
                    <Link href={"/"}><span className='font-bold text-gray-50 text-4xl'>Arigato</span></Link>
                </div>
                <div className='flex space-x-4 p-4 '>
                    {session ? <button className='bg-transparent border-[1px] border-white text-white p-4 py-2 rounded-lg text-lg font-semibold'>{session.user.email}</button> : <Link href={"/login"} className='bg-transparent border-[1px] border-white text-white p-4 py-2 rounded-lg text-xl font-semibold'>Login</Link>}
                    {!session && <Link href={"/signup"} className='bg-transparent border-[1px] border-white text-white p-4 py-2 rounded-lg text-lg font-semibold'>Sign Up</Link>}
                    <Link href={"/"} onClick={() => { signOut }} className='bg-transparent border-[1px] border-white text-white p-4 py-2 rounded-lg text-lg font-semibold'>Logout</Link>

                </div>

            </nav>
            <div className='w-[80vw] mx-auto py-6'>
                <div className="package flex flex-wrap gap-4 py-6">
                    <Package src={"./package/Paan Corner.png"} name={"Paan Corner"} alt={"Paan Corner"}/>
                    <Package src={"./package/Dairy.png"} name={"Dairy, Bread & Eggs"} alt={"Dairy, Bread & Eggs"}/>
                    <Package src={"./package/Dairy.png"} name={"Dairy, Bread & Eggs"} alt={"Dairy, Bread & Eggs"}/>
                    <Package src={"./package/Dairy.png"} name={"Dairy, Bread & Eggs"} alt={"Dairy, Bread & Eggs"}/>
                    <Package src={"./package/Dairy.png"} name={"Dairy, Bread & Eggs"} alt={"Dairy, Bread & Eggs"}/>
                    <Package src={"./package/Dairy.png"} name={"Dairy, Bread & Eggs"} alt={"Dairy, Bread & Eggs"}/>
                    <Package src={"./package/Dairy.png"} name={"Dairy, Bread & Eggs"} alt={"Dairy, Bread & Eggs"}/>
                    <Package src={"./package/Dairy.png"} name={"Dairy, Bread & Eggs"} alt={"Dairy, Bread & Eggs"}/>
                    <Package src={"./package/Dairy.png"} name={"Dairy, Bread & Eggs"} alt={"Dairy, Bread & Eggs"}/>
                    <Package src={"./package/Dairy.png"} name={"Dairy, Bread & Eggs"} alt={"Dairy, Bread & Eggs"}/>
                    <Package src={"./package/Dairy.png"} name={"Dairy, Bread & Eggs"} alt={"Dairy, Bread & Eggs"}/>
                    <Package src={"./package/Dairy.png"} name={"Dairy, Bread & Eggs"} alt={"Dairy, Bread & Eggs"}/>
                    <Package src={"./package/Dairy.png"} name={"Dairy, Bread & Eggs"} alt={"Dairy, Bread & Eggs"}/>
                    <Package src={"./package/Dairy.png"} name={"Dairy, Bread & Eggs"} alt={"Dairy, Bread & Eggs"}/>
                    <Package src={"./package/Dairy.png"} name={"Dairy, Bread & Eggs"} alt={"Dairy, Bread & Eggs"}/>
                    <Package src={"./package/Dairy.png"} name={"Dairy, Bread & Eggs"} alt={"Dairy, Bread & Eggs"}/>
                    <Package src={"./package/Dairy.png"} name={"Dairy, Bread & Eggs"} alt={"Dairy, Bread & Eggs"}/>
                </div>

                <div>
                    <h1 className='font-bold text-3xl text-gray-900'>Dairy, Bread & Eggs</h1>
                    <div className='flex gap-4 flex-wrap py-6'>
                        <Card img={"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/613787ac-f983-4cfb-b534-e219c8d47b39.png"} alt={"Amul Butter"} title={"Amul Salted Butter"} weight={"100 g"} rupees={"58"} />
                        <Card img={"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e313d560-fff3-47a4-a496-01d592e26fb4.png"} alt={"Mother Dairy"} title={"Mother Dairy Classic Cup Curd"} weight={"400 g"} rupees={"50"} />
                        <Card img={"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/5734b087-3ad9-485f-bbe2-52079cd9e35d.png"} alt={"Amul milk"} title={"Amul Taza Toned Milk"} weight={"500 ml"} rupees={"29"} />
                        <Card img={"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ae29e828-f5d9-4f8b-89b6-8c6d6919df7b.png"} alt={"Amul Cow Milk"} title={"Amul Cow Milk"} weight={"500 ml"} rupees={"30"} />


                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
