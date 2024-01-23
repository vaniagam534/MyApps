import React from "react";
import Card from "./Shared/Card";
import { useState } from "react";
import Button from "./Shared/Button";
import RatingSelect from "./RatingSelect";
import { useContext, useEffect } from "react";
import FeedbackContext from "../Context/FeedbackContext";
import { faL } from "@fortawesome/free-solid-svg-icons";

// Removing handleadd function prop ,we'll get it from context
// function FeedbackForm({handleAdd}) {

function FeedbackForm() {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      // handleAdd(newFeedback);
      // change it to addFeedback

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setText("");
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
    if (text === "") {
      setMessage(null);
      setBtnDisabled(true);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Feedback should be more than 10 characters !");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you like to rate this Application?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a Review !"
            value={text}
          ></input>
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}
export default FeedbackForm;
