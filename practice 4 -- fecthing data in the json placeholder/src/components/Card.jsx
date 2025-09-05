import React from 'react'
import { useState, useEffect } from 'react'


const Card = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        async function card() {
            let a = await fetch("https://jsonplaceholder.typicode.com/posts")
            let data = await a.json()

            setCards(data)
        }
        card()
    }, [])

    return (

        <>

            <div className="card flex flex-wrap gap-4 justify-center items-center mt-3.5 ">
                {cards.map((card) => {
                    return <div key={card.id} className=' bg-gray-200 rounded-2xl'>
                        <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1679228049079/72b5f6b1-82c2-4c81-a1f3-c869d29cffb1.jpeg" alt="" className='w-[20vw] h-[20vh] rounded-2xl p-2' />
                        <main className='flex flex-col gap-1.5 p-3 w-[20vw] min-h-[20vh]'>
                            <h1 className='font-bold text-xl'>{card.title}</h1>
                            <div className='font-light'>{card.body}</div>
                            <div className='font-normal text-center mt-1'>By UserId: {card.userId}</div>
                        </main>
                    </div>
                })}
            </div>


        </>
    )
}

export default Card
