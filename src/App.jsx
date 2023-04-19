import { Carousel } from "flowbite-react"
import { useState } from "react"
import React from 'react'
import Flowcarousel from "./components/carousel"
import Search from "./components/section1"
import Products from "./components/productlist"
import Nav1 from "./components/navbar"
import Footer1 from "./components/footer"
import Newarrivals from "./components/section3"
import Filter from "./components/section4"
import Discount from "./components/discount"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./components/home"

import Linksuit1 from './components/linksuit1'
import Linksuit2 from './components/linksuit2'
import Linksuit3 from './components/linksuit3'
import Linksuit4 from './components/linksuit4'
import Linksuit5 from './components/linksuit5'
import Linksuit6 from './components/linksuit6'
import Linksuit7 from './components/linksuit7'
import Linksuit8 from './components/linksuit8'
import Linksuit9 from './components/linksuit9'
import Linksuit10 from './components/linksuit10'
import Linksuit11 from './components/linksuit11'
import Linksuit12 from './components/linksuit12'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   

<BrowserRouter>
<Footer1></Footer1>
<Routes>
  <Route path='/' element={<Home></Home>}/> 

 <Route path="/linksuit1" element={<Linksuit1></Linksuit1>}/>

<Route path="/linksuit2" element={<Linksuit2></Linksuit2>}/>

<Route path="/linksuit3" element={<Linksuit3></Linksuit3>}/>

<Route path="/linksuit4" element={<Linksuit4></Linksuit4>}/>

<Route path="/linksuit5" element={<Linksuit5></Linksuit5>}/>

<Route path="/linksuit6" element={<Linksuit6></Linksuit6>}/>

<Route path="/linksuit7" element={<Linksuit7></Linksuit7>}/>

<Route path="/linksuit8" element={<Linksuit8></Linksuit8>}/> 

<Route path="/linksuit9" element={<Linksuit9></Linksuit9>}/>

<Route path="/linksuit10" element={<Linksuit10></Linksuit10>}/>

<Route path="/linksuit11" element={<Linksuit11></Linksuit11>}/>

<Route path="/linksuit12" element={<Linksuit12></Linksuit12>}/> 

  </Routes>
  </BrowserRouter>



{/*<Discount></Discount>


<Products></Products>
<Footer1></Footer1>*/}








    </>
  )
}

export default App
