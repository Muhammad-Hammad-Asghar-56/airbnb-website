import React from 'react'
import heroPic from '../Assets/grid-Image.png'
import '../Style/HeroPic.css'
const Hero = () => {
  return (
    <div className='heroComponent'>
      <div>
        <div className='heroPicContainer'>
          <img className='heroPic' src={heroPic} alt="" />
        </div>
        <div>
          <h1>Online Experieces</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quia sapiente velit aperiam ea nihil laudantium tenetur inventore. Iusto quia labore harum delectus eaque nostrum nulla quae deleniti perspiciatis odit!</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
