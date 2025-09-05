import React from 'react'
import "./Card.css"

const card = (props) => {
  return (
    <div className='card' style={{overflow: "hidden"}}>
        <img src="https://cms-assets.themuse.com/media/lead/01212022-1047259374-coding-classes_scanrail.jpg" alt="" width={333} style={{border: "2px solid red"}}/>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default card
