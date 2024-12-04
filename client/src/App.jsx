import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css'
import BlogList from "./components/BlogList"
import CreateBlog from "./components/CreateBlog"
import EditBlog from "./components/EditBlog"



const App = () => {
  return (
    <BrowserRouter>
    <div>
      <h1>blog app</h1>
    </div>
    <Routes>
      <Route path="/" element={<BlogList/>}/>
      <Route path="/create" element={<CreateBlog/>}/>
      <Route path="/edit/:id" element={<EditBlog/>}/>
    </Routes>

      
    </BrowserRouter>
  )
}



export default App
