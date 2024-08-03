
import useWindowssize from "../hooks/useWindowssize";
import { useNavigate } from "react-router-dom";
import useAxiosFetch from "../hooks/useaxiosfetch";
import api from '../api/posts';
import { useState,useEffect } from "react";
import { createContext } from "react";







 const DataContext = createContext({});


 export const DataProvider =({Children})=>{
    const [posts,setPosts] =useState([]);
    const [searchRes,setsearchRes]= useState([])
    const [search,setSearch]=useState("");
  
    const [postName,setPostName] =useState("");
    const [postBody,setPostBody] =useState("");
  
    const [editName,seteditName] =useState("");
    const [editBody,seteditBody] =useState("");
    const {width}=useWindowssize();
  
    const navigate =useNavigate();
    const {data,fetchError,isLoading} = useAxiosFetch('http://localhost:3500/posts')
  
  useEffect(()=>{
    setPosts(data);
  },[data])
  
    // useEffect(()=>{
    //   const fetchPosts = async()=>{
    //     try{
    //     const response = await api.get('/posts');
    //     setPosts(response.data)
    //     }
    //     catch(err){
    //       if(err.response){
    //         console.log(err.response.data)
    //         console.log(err.response.status)
    //         console.log(err.response.Headers)
    //       }
    //       else{
    //         console.log(err.message)
    //       }
    //     }
    //   }
    //   fetchPosts();
    // },[]);
  
  
    useEffect(()=> {
        const filterRes = posts.filter(
          (post)=>
        ((post.body).toLowerCase()).includes(search.toLowerCase())||
        ((post.name).toLowerCase()).includes(search.toLowerCase())
      );
  
      setsearchRes(filterRes.reverse());
    },[posts,search])
    
  
    
  
    const handleSubmit = async(e)=>{
      e.preventDefault();
  
      const id = posts.length ? posts[posts.length-1].id+1:1;
      const newpost ={id,name:postName,body:postBody};
        try{
            const response = await api.post("/posts",newpost);
            const allposts =[...posts, response.data];
            setPosts(allposts);
            setPostName("")
            setPostBody("")
            navigate("/")
        }
        catch(err){
          if(err.message){
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.Headers)
          }
          else{
            console.log(err.message)
          }
        }
  
    }
  const handleEdit= async(id)=>{
  
    const updatedpost ={id,name:editName,body:editBody};
    try{
      const response = await api.put(`posts/${id}`,updatedpost)
      setPosts(posts.map((post)=>post.id===id?{...response.data}:post))
      seteditName("")
      seteditBody("")
      navigate("/")
      
    }
    catch(err){
  console.log(err.message)
    }
  
  }
  
  
    const handleDelete = async(id)=>{
       
        try{
         await  api.delete(`posts/${id}`)
         const delitem =  posts.filter(post=> post.id!==id)
          setPosts(delitem)
          navigate("/")
        }
        catch(err){
          console.log(err.nessage)
        }
  
        
    }
    

   
    return (
        <DataContext.Provider  value={{
            width,search,setSearch,posts
            ,handleSubmit,postName,setPostName,
            postBody,setPostBody,handleDelete,
            editBody,editName, seteditBody,seteditName,
            handleEdit,searchRes,fetchError,isLoading
        }}>
        {Children} 
        </DataContext.Provider>
    )

}
 export  default DataContext