import { useContext, useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import './styles/App.css'
import {myHackContext} from './context/MyHackContext'
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const [count, setCount] = useState(0)
  let {Mode}=useContext(myHackContext)

  return (
    <BrowserRouter>
            {/* <Navbar/> */}
            {/* <p>{count}</p>
            <p className=''>{Mode?"light":"dark"}</p>
            <button onClick={()=>{setCount(count+2)}}>update</button> */}
            <Routes>
                <Route path='/home' element={<Home/>}/>
                {/* <Route path='/Movie' element={<Movie/>}>
                    <Route path=':MovieId' element={<Movie/>}/>
                </Route> */}
                {/* <Route path='/TopPics' element={<TopPics/>}/> */}
                {/* <Route path='/Gallery' element={<Gallery/>}/> */}
                <Route path='/login' element={<Login/>}/>
                
            </Routes>
            {/* <Footer/> */}
        </BrowserRouter>
  )
}

export default App
