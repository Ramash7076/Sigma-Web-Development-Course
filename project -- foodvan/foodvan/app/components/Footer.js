import React from 'react'

const Footer = () => {
  return (
    <footer className=' text-white absolute z-10 bottom-0 w-full'>
      <div className="container mx-auto py-4 ">
        <p className="text-center text-sm">
          Copyright &copy; {new Date().getFullYear()} FoodVan. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
