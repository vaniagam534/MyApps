import React from 'react'
import {useParams,Navigate,useNavigate} from 'react-router'

function Post() {
    const params=useParams();
    const navigate=useNavigate();
    const onClick=()=>{
    console.log('button clicked !');
    navigate('/about');
}

    const status=200;
    if(status===404)
    {
      return <Navigate to='/notfound'/>
    }

  return (
    <div>
<button onClick={onClick}>Redirect to About Page</button>

      <h1>Post{params.id}</h1>
      <p>Name:{params.name}</p>
    </div>
  )
}

export default Post;
