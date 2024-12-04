import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './BlogList.css'; // Import the CSS file

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/getAllData`)
      .then((response) => setBlogs(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/blog/${id}`);
      setBlogs(blogs.filter((blog) => blog._id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <div className="blog-container">
      <h1>Blog List</h1>
      <Link to={"/create"}>Create a New Blog</Link>
      <ul>
        {blogs.map((blog) => (
          <li key={blog._id}>
            <h1>{blog.title}</h1>
            <p>{blog.desc}</p>
            <Link to={`/edit/${blog._id}`}>Edit Blog</Link>
            <button onClick={() => handleDelete(blog._id)}>Delete Blog</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
