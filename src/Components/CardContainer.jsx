import React from 'react'
import Card from './Card'
import "../Style/CardContainer.css"
import data from '../data'

const CardContainer = () => {
    
  return (
    <div className='container'>
        <div className='cardContainer'>
            {
                data.map((item,index)=>(
                    <Card imagName={item.coverImg} price={item.price} details={item.description} review={item.stats.reviewCount} rating ={item.stats.reviewCount} country={item.location}/>
                ))

            }
        </div>
    </div>
  )
}

export default CardContainer
