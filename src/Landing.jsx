import React from 'react'
import "./landing.css"
import  Img2 from "./image/img2.jpg"

 const Landing = () => {
  return (
  <>
    <div className="flex  flex-col  border-2 h-12 w-12 ">
      <img src={Img2} alt='' className=" !h-[200px] !w-[200px]"/>
        <p>Name</p>
        <p>Type</p>
        <p>Details</p>
    </div>

  
  

  </>
  )
}
export default Landing
