import React from 'react';
import star from '../Assets/star.png';
import '../Style/Card.css';

const Card = (props) => {
  const { price, details, review, rating, country,imagName } = props;
  return (
    <div className='card'>
      
      <img className='profilePic' src={require(`../Assets/${imagName}`)} alt="" />
      <div className='profile-stats'>
        <img width={'20px'} height={'20px'} src={star} alt="" />
        <span style={{ marginLeft: '10px' }}>{`${rating}`}</span>
        <span className='lighter'>{`(${review}) ${country}`}</span>
      </div>
      <div>
        <p className='description' style={{ maxHeight: '80px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {details}
        </p>
        <div>
          <span className='price'>{price}</span>
          <span style={{fontSize:'10px'}}> / person</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
