import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate=useNavigate();
  const handleServices=()=>{
    navigate("/services");
  }
  const handleBag=()=>{
    navigate("/Bag");
  }
  const handleHome=()=>{
    navigate("/")
  }
  const handleReviews=()=>{
    navigate("/reviews")
  }
  return (
    <div className='fixed z-40'>
    <div className='h-20 bg-drymeBlue fixed top-0 w-full z-30'>Head 1</div>
    <div className='h-20 bg-white w-3/4 m-auto flex fixed top-12 left-44 border-solid border-2 z-30'>
     <div className=' w-2/4 flex items-center pl-10 h-full '><span className=''><h1 className='EasyWashFirst'>Easy <span className='EasyWashSecond'>Wash</span></h1></span>
     </div>
     <div className='h-full w-2/4  flex  z-1'>
       <div className='h-full w-1/6 flex items-center justify-center hover:text-select'><span></span></div>
       <div className='h-full w-1/6  flex items-center justify-center hover:text-select' onClick={handleHome}><i className="fa-solid fa-house"></i><span>Home</span></div>
       <div className='h-full w-1/6  flex items-center justify-center hover:text-select' onClick={handleServices}><i className="fa-solid fa-gear"></i><span>Services</span></div>
       <div className='h-full w-1/6  flex items-center justify-center hover:text-select ' onClick={handleReviews}><i className="fa-solid fa-heart"></i><span>Reviews</span></div>
       <div className='h-full w-1/6 flex items-center justify-center hover:text-select' onClick={handleBag}><i className="fa-solid fa-bag-shopping"></i><span>Bag</span></div>
       <div className='h-full w-1/6  flex  items-center justify-center hover:text-select'><i className="fa-solid fa-user m-1"></i><span>LogIn</span></div>
     </div>
     </div>
     </div>
  )
}

export default Navbar
