import React from 'react'
import Search from './section1'
import Flowcarousel from './carousel'
import Newarrivals from './section3'
import Discount from './discount'
import Products from './productlist'
import Nav1 from './navbar'


export const Home = () => {

return(

    <>
 <Nav1></Nav1>   
<Search></Search> 
<Flowcarousel></Flowcarousel> 
<Newarrivals></Newarrivals>  
<Discount></Discount>  
<Products></Products>
    </>
)




}