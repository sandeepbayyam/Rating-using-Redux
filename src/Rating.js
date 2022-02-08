import React from 'react';
import './style.css';
import {connect} from 'react-redux';
 
const Rating =(props)=>{
  return(
    <div className='betterview'>
      <h3>Rating :{props.currentRating}/5</h3>
      <h3>Total Rating :{props.TotalRating}</h3>
      <h3>Avg.Rating :{props.TotalRating/props.NumofRatings}</h3>
    </div>
  )
}
export default connect((store)=>{
  return store;
}) (Rating);