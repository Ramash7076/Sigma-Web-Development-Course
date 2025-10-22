import React from 'react'

const Card = ({img, alt, title, weight, rupees}) => {
  
  return (
    <div className='border-[0.2px] border-gray-200 p-3 shadow-md rounded-md w-45 h-65 relative'>
      <div className="img flex justify-center items-center">
        <img height={100} width={100} src={img} alt={alt} />
      </div>
      <h2 className='text-md font-medium pb-3'>{title}</h2>
      <h2 className='text-md font-normal text-gray-400 pb-3 absolute bottom-10'>{weight}</h2>
      <div className='flex justify-between items-center w-[85%] absolute bottom-3.5'>
        <h2 className='text-[13.5px] font-medium'>₹{rupees}</h2>
        <button className='border-2 border-green-600 px-2 py-1 rounded-xl text-green-600'>Add</button>
      </div>
    </div>
  )
}

export default Card
