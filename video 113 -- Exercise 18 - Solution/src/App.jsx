import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [cards, setCards] = useState([])

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setCards(data)

  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Navbar />
      <div className=" flex flex-wrap gap-[34px]">
        {cards.map((card) => {
          return <div key={card.id} className="card border-2 max-w-[20vw] m-4 p-4 rounded-2xl">
            <img s src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8drDlCfSQXmE702IZL95YSVlsB3kD-7Ny2w&s" width={400} alt="" />
            <h1 className='text-2xl font-bold'>{card.title}</h1>
            <p className='text-sm '>{card.body}</p>
            <span className='font-medium'>By: UserId: {card.userId}</span>
          </div>
        })}
      </div>
    </>
  )
}

export default App
