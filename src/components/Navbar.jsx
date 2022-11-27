import React from 'react'
import Insta from "../assets/instagram.png"
import Messages from "../assets/images.png"
function Navbar() {
  return (
    <>
    <div className='d-flex justify-content-between'>
    <img src={Insta} alt="" className='insta' />
    <img src={Messages} alt="" className='message'/>
    </div>
    <hr></hr>
    </>
  )
}

export default Navbar