import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './EditBlog.css';


const EditBlog = () => {
  const API_BASE_URL = "http://localhost:3000";
  const {id} = useParams()
  const navigate = useNavigate()
  const [blog, setBlog] = useState({ title: "", desc: "" });

const handleSubmit=async(e)=>{
e.preventDefault()
try {
  await axios.patch(`${API_BASE_URL}/blog/${id}`,blog)
  navigate("/")
} catch (error) {
  console.error("Error updating blog:", error);
}
}

  useEffect(() => {
   const fetchapi=async()=>{
    try {
      const response=await axios.get(`${API_BASE_URL}/getAllData`)
      const existingBlog=response.data.find((b)=>b._id === id)
      if (existingBlog) {
        setBlog({title:existingBlog.title,desc: existingBlog.desc})
      }
    } catch (error) {
      console.error("Error fetching blog:", error);

    }
   }
   fetchapi()
  }, [id])
  
  return (
    <div>
      <h1>edit blog</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={blog.title}  onChange={(e)=>setBlog({...blog,title:e.target.value})} required/>
        <input type="text" value={blog.desc}  onChange={(e)=>setBlog({...blog,desc:e.target.value})} required/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default EditBlog
