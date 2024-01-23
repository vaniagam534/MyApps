import React from "react";
import FeedbackItem from "./FeedbackItem";
import "../Data/FeedbackData";
import Card from "./Shared/Card";
import PropTypes from 'prop-types';
import {motion,AnimatePresence}from 'framer-motion';
import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";
// <div className="feedback-list">
//       {feedback.map((item) => (
        
//           <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
        
//       ))}
//     </div>
//function Feedbacklist({ feedback, handleDelete }) {
  //removing feedback and handleDelete prop
function Feedbacklist() {
  /**Taking feedback  from context  and we don't need handledelete here, so removing it */
  
  
  const {feedback}=useContext(FeedbackContext);
  
  
  if (!feedback || feedback.length === 0) {
    return <p> "NO Feedback Yet !" </p>;
  }
  return (
    <div className="feedback-list">
      <animateMotion>
      {feedback.map((item) => (       
       <motion.div
       key={item.id}
       initial={{opacity:0}}
       animate={{opacity:1}}
       exit={{opacity:0}}
       >
        {/* Removing handleDelete prop , it will come from context now  */}
          {/* <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} /> */}

          <FeedbackItem key={item.id} item={item}/>
          </motion.div>
      ))}
      
      </animateMotion>
    </div>
    
  );
}

/**Prop Types Removed */

// Feedbacklist.propTypes={
//   feedback: PropTypes.arrayOf(PropTypes.shape({
//     id:PropTypes.number.isRequired,
//    rating:PropTypes.number.isRequired,
//    text:PropTypes.string.isRequired,
//   }))
// }
export default Feedbacklist;
