import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./BlogList.css"

const BlogList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(`http://localhost:3000/getAllData`);
        setData(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const del = async (id) => {
    await axios.delete(`http://localhost:3000/blog/${id}`);
    setData(data.filter((data) => data._id !== id));
  };

  return (
    <div>
      <Link to="/create">Create Blog</Link>
      {data.map((blog, index) => (
        <div key={index} className="blog-card">
          <h1>{blog.title}</h1>
          <p>{blog.desc}</p>
          <div className="blog-buttons">
            <Link to={`/edit/${blog._id}`}>Edit</Link>
            <button onClick={() => del(blog._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
