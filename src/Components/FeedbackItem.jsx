import React from "react";
import "../index.css";
import "../Data/FeedbackData";
import Card from "./Shared/Card";
// import { FaTimes } from "react-icons/fa";
import {FaRegTrashAlt,FaEdit } from "react-icons/fa";
import PropTypes from 'prop-types'
import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";

// Removing handleDelete prop, it will come from context 
// function FeedbackItem({ item, handleDelete }) {
  
function FeedbackItem({ item }) {

 const {deleteFeedback,editFeedback} =useContext(FeedbackContext);
  return (
    <Card>
      <p className="num-display">{item.rating}</p>
      <button className="close" onClick={()=>deleteFeedback(item.id)}>
        <FaRegTrashAlt />
      </button>
      <button className="edit" onClick={()=>editFeedback(item)}>
      <FaEdit/>     
      </button>      
      <p className="text-display">{item.text}</p>
    </Card>
  )
}

// FeedbackItem.propTypes={
//   item:PropTypes.object.isRequired
// }
export default FeedbackItem;
