import React from 'react'

const Navbar = () => {
    return (
        <nav className=' flex justify-between items-center px-10 bg-purple-400 h-12 text-white'>
            <div>
                <h2 className='font-bold text-2xl cursor-pointer'>
                    <span className='text-purple-900'>&lt;</span>
                    <span className='text-purple-100'>Pass</span>
                    <span className='text-purple-900'>Man</span>
                    <span className='text-purple-900'>/&gt;</span>
                </h2>
            </div>
            <ul className='flex gap-3 w-[180px] justify-around'>
                <li className='hover:font-bold text-[17px] text-purple-100 cursor-pointer'>Home</li>
                <li className='hover:font-bold text-[17px] text-purple-100 cursor-pointer'>About</li>
                <li className='hover:font-bold text-[17px] text-purple-100 cursor-pointer'>contact</li>
            </ul>
        </nav>
    )
}

export default Navbar
