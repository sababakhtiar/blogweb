
import React from 'react'
import {Link} from "react-router-dom"
import {FaArrowRight} from "react-icons/fa6"

const Hero = () => {
  return (

<div className='px-4 py-32 bg-black'>
  <div className='text-white text-center '>

    <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5 animate-bounce'>Welcome to Our Blog</h1>
    <p className='text-gray-200 lg:w-3/5 mx-auto mb-5 font-primary'>Start your blog today and join a community of writers and readers who are passionate about sharing their stories and ideas.We offer everything you need to get started, from height tips and tutorial.</p>
    <div>
  <Link to="/" className="font-medium  inline-flex items-center  py-1 hover:text-gray-500">Learn more<FaArrowRight className="mt-1 ml-2"/> </Link>
</div>
  
  
  </div>



</div>

  )
}

export default Hero


// {/* <FaArrowRight className-"mt-1 ml-2"/> */}



    // <div className='overflow-hidden '>
    //  <h1 className='text-center m-40 p-10 text-8xl font-Roboto content-center items-center animate-bounce md:text-center md:text-9xl sm:text-4xl sm:text-center sm:m-20'> Blog Website 🎈</h1>
    
    //  <p className='p-10 m-10  text-black w-full font-Poppins  text-center animate-pulse '>When blogs first appeared on the world wide web, their goal was mainly personal use, such as sharing stories, interests, and thoughts</p>

    // </div>

