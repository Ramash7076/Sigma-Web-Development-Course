import React from 'react'

const Navbar = () => {
  return (
    <nav className='absolute top-10 text-white left-[10vw] bg-gray-400 w-[80vw] rounded-full p-5 px-10 flex justify-between items-center'>
      <div className="logo ">
        <h1 className='font-bold text-4xl '>myNotes</h1>
      </div>
      <div>
        <ul className='flex gap-4'>
          <li className='hover:bg-slate-500 '>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Notes</li>
          <li>Social</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
