import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Postlist = () => {
  return (
    <div>
            <Link to="/post/1">Post1</Link>
            <br></br>
            <Link to="/post/2">Post2</Link>
            <br></br>
            <Link to="/post/3">Post3</Link>
            <Outlet/>
    </div>
  )
}

export default Postlist