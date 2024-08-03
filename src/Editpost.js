import { useContext, useEffect } from 'react'
import { useParams} from 'react-router-dom'

import DataContext from './context/DataContext'


const Editpost = () => {

   const  {posts,
  editBody,
  editName,
  seteditBody,
  seteditName,
  handleEdit}=useContext(DataContext)

const {id} =useParams();
const post = posts.find(post=>(post.id).toString() === id)

useEffect(()=>{

    if(post){
     
        seteditName(post.name);
           seteditBody(post.body);
    }

 },[post,seteditName,seteditBody]);

  return (
   
 <main className='NewPost'>
    {editName &&
    <>
    
    <h2>Edit Page</h2>
    <form className='newPostForm' onSubmit={(e)=>e.preventDefault()}>

      <label htmlFor='editName'>Name:</label>
      <input 
          id='editName'
          type='text'
          value={editName}
          onChange={(e)=>seteditName(e.target.value)}
      />
        <label htmlFor='postBody'>Body:</label>
      <textarea 
          id='postBody'
            required
          value={editBody}
          onChange={(e)=>seteditBody(e.target.value)}
      />

      <button type='submit' onClick={()=>handleEdit(post.id)}>Submit</button>

    </form>
    </>
    }
    {!editName &&

            <>
            <h2>Page not found</h2>
            <p>Well,thats disapointing ,visit our home page</p>

            </>

    }

 </main>


  )
    }

export default Editpost