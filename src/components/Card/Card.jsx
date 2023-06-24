import React from 'react'
import "./Card.css"

const Card = ({image,text,title}) => {
  return (
    <div className='card'>
        <img className='card-image' src={image} alt="" />
        <span className='card-title'>{title}</span>
        <span className='card-text'>{text}</span>
        <button className='card-button'>More Items</button>
    </div>
  )
}

export default Card

//height: 12rem;
   // width: 12rem;
     //padding: 6px;