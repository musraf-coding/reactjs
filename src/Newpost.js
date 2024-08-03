import { useContext } from "react"
import DataContext from "./context/DataContext"


const Newpost = () => {
   const {handleSubmit,postName,setPostName,postBody,setPostBody}= useContext(DataContext)
    return (
    <main className='NewPost'>

    <h2>New Post</h2>
    <form className='newPostForm' onSubmit={handleSubmit}>

      <label htmlFor='postName'>Name:</label>
      <input 
          id='postName'
          type='text'
          placeholder='Name'
          value={postName}
          onChange={(e)=>setPostName(e.target.value)}
      />
        <label htmlFor='postBody'>Body:</label>
      <textarea
          id='postBody'
          type='text'
          placeholder='Body'
          value={postBody}
          onChange={(e)=>setPostBody(e.target.value)}
      />

      <button type='submit'>Submit</button>

    </form>
    </main>

  )
}

export default Newpost