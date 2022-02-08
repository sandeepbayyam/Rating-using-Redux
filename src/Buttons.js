import React from 'react';
import './style.css'
import {connect} from 'react-redux';

const Buttons =(props)=>{
  console.log(props);
  var stars = [1,2,3,4,5]
  return(
    <div className='betterview'>
      {
        stars.map((e,i)=>{
          return(
            <>
            <i  className ={props.currentRating>i?'bi bi-star-fill':'bi bi-star'} onClick={()=>{props.dispatch({type:'Rate',val:e})}}></i>
            &nbsp;&nbsp;
            </>
          );
        })
      }
      </div>  
  )
}
export default connect((store)=>{ 
  return store;
}) (Buttons);