import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex p-[12px] bg-purple-300 text-black mb-2.5'>
        <ul className='flex list-none gap-4 px-[12px] py-[3px]'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar
