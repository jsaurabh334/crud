import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CreateBlog.css"; 

const CreateBlog = () => {
  const [blog, setBlog] = useState({ title: "", desc: "" });
  const navigate = useNavigate();
  const API_BASE_URL = "http://localhost:3000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/blog`, blog);
      navigate("/");
    } catch (error) {
      console.error("Error in blog creation", error);
    }
  };

  return (
    <div className="create-blog-container">
      <h1>Create Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blog Title"
          value={blog.title}
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Blog Description"
          value={blog.desc}
          onChange={(e) => setBlog({ ...blog, desc: e.target.value })}
          required
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateBlog;
