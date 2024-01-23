
import './App.css';
import FeedbackItem from './Components/FeedbackItem';
import Header from './Components/Header';
import Feedbacklist from './Components/Feedbacklist';
import './Data/FeedbackData';
import { useState } from 'react';
import feedBackData from './Data/FeedbackData';
import { FaRegTrashAlt } from "react-icons/fa";
import FeedbackStats from './Components/FeedbackStats';
import FeedbackForm from './Components/FeedbackForm';
import RatingSelect from './Components/RatingSelect';
import { v4 as uuidv4 } from 'uuid';
import {BrowserRouter as Router, Route,Routes,NavLink} from 'react-router-dom';
import Card from './Components/Shared/Card';
import AboutPage from './Pages/AboutPage';
import AboutLinkIcon from './Components/AboutLinkIcon';
import Post from './Components/Post';
import {FeedbackProvider} from './Context/FeedbackContext';

function App() {
  //const [feedback,setFeedback]=useState(feedBackData);
  /**cutting and pasting deleteFeedback and addFeedback functions to FeedbackContext.jsx */
  
  // const deleteFeedback=(id)=>{
  //   if(window.confirm('R u sure you want to delete the Feedback?'))
  //   {
  //     setFeedback(feedback.filter((item)=>item.id!==id))
  //   }
  // }
    // const addFeedback=(newFeedback)=>{
    //   newFeedback.id=uuidv4();
    //   console.log(newFeedback.id);
    //   setFeedback([newFeedback,...feedback]);
    
    // }
  
  return (
    <FeedbackProvider>
   <Router>
      <Header text="Feedback UI"/> 
               
                <div className='container'>
    <Routes>

                  <Route exact path='/' element={
                  <>
                  {/* Removing handleAdd prop , we'll pick it from context now  */}
                    {/* <FeedbackForm handleAdd={addFeedback}/> */}

                    <FeedbackForm />
                   {/* Now we will not pass prop  */}
               {/* <FeedbackStats feedback={feedback}/> */}

               <FeedbackStats/>
               
               
               
               {/* Now we will not pass prop  */}
               {/* <Feedbacklist feedback={feedback} handleDelete={deleteFeedback}/> */}
               <Feedbacklist/>
               <AboutLinkIcon/>              
               </>
              }>           
               </Route> 
               <Route exact path='/about' 
               element={
                 <AboutPage/>             
                   }> </Route>
                   <Route exact path='/post/:id/:name' element={<Post/>}/>
                 </Routes>
               

                 <Card>
                  <NavLink to='/' activeClassName='active'>Home</NavLink>
                  <NavLink to='/about' activeClassName='active'>About Us</NavLink>
                 </Card>
               </div>
   </Router>
   
     
      
    </FeedbackProvider>
  )  
}
export default App;
