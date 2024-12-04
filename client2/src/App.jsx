import React from 'react'

import BlogList from './components/BlogList'
import {BrowserRouter as BR,Routes, Route} from 'react-router-dom'
import CreateList from './components/CreateList'
import EditBlog from './components/EditBlog'

const App = () => {
  
  return (
  <BR>
  <Routes>
<Route exact path='/' element={ <BlogList/>}/>
<Route  path='/create' element={ <CreateList/>}/>
<Route  path='/edit/:id' element={ <EditBlog/>}/>


  </Routes>
  </BR>
  )
}

export default App
