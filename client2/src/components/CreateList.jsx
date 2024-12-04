import axios from 'axios'
import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"

const CreateList = () => {
  const [blog, setBlog] = useState({title:"",desc:""})
  const navigate=useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(blog)
    const resp =await axios.post(`http://localhost:3000/blog`,blog)
    if (resp) {
      alert("blog created")
      navigate("/")
    }
  }
  return (
    <div>
      <h1>create blog</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='title'  value={blog.title} onChange={(e)=>setBlog({...blog,title:e.target.value})}/>
        <input type="text" placeholder='desc'  value={blog.desc} onChange={(e)=>setBlog({...blog,desc:e.target.value})}/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default CreateList
