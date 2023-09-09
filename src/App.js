import React from 'react'
import Home from './comp/home'
import About from './comp/about'
import Contact from './comp/contact'
import Error from './comp/error'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
{
  /* The following line can be included in your src/index.js or App.js file */
}
function App() {
  return (
<Router>

    <div>
    <h1>hi ahmad</h1>
      <Link to={'/'} >Home</Link>
      <Link to={'/about'} >About</Link>
      <Link to={'/contact'} >Contact</Link>



      <Routes>

        <Route path='/' element={<Home/>}/>
        
        <Route path='/about' element={<About/>}/>
      
       <Route path='/contact' element={<Contact/>}/>

       <Route path='*' element={<Error/>}/>

      </Routes>
      


    </div>
    </Router>

  )
}

export default App