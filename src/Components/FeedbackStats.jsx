import React from 'react'
import Proptypes from 'prop-types'
import { useContext } from 'react';
import FeedbackContext from '../Context/FeedbackContext';


// function FeedbackStats({feedback}) {
//Removing feedback prop

function FeedbackStats() {
  /** taking feedback from context api */
  const {feedback}=useContext(FeedbackContext);

    let average=feedback.reduce((sum,curval)=>{
      return sum+curval.rating;
    },0)/feedback.length;
  average= average.toFixed(1);
  return (    
    <div className='feedback-stats'>
<h4>{feedback.length} Reviews</h4>
<h4>Average Rating:{isNaN(average)?0:average}</h4>
   </div>
  )
}

/**Removing propstypes  */

// FeedbackStats.propTypes= {
//     feedback:Proptypes.array.isRequired,
// }

export default FeedbackStats
