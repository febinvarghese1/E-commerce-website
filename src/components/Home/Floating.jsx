import React from 'react'
import img from "../../../float.jpg"
const Floating = () => {
  return (  
    <div className='floating'>
        <div className="floating__top">
          <h1>Level up your style.</h1>
        </div>
        <div className="floating__center">
        <img src={"https://images.unsplash.com/photo-1536766820879-059fec98ec0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"} alt="" />
        </div>
        <div className="floating__bottom">
          <h1>Fashion up your look</h1>
        </div>
    </div>
  )
}

export default Floating