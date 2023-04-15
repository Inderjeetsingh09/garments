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
import Lillidress from "./components/narouter"




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav1></Nav1>

    <Search></Search>

<Flowcarousel></Flowcarousel>

<Filter></Filter>



<BrowserRouter>
<Newarrivals></Newarrivals>
<Routes>
  <Route path='/lilli' element={<Lillidress></Lillidress>}/> 
  </Routes>
  </BrowserRouter>



<Discount></Discount>


<Products></Products>
<Footer1></Footer1>








    </>
  )
}

export default App
