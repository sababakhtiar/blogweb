import React from 'react'
import { Link } from 'react-router-dom'
import web from "../Assest/lap.png"
const Cards = () => {
  return (
    <div>
      <h1 className='m-20 font-bold text-3xl font-Roboto  sm:text-sm md:text-lg lg:text-3xl text-[#212121] text-center'>Blog Highlights</h1>

    <div className='grid sm:grid-cols-2 md:grid-cols-3  sm:space-x-4 m-10'>
   <div className='bg-white rounded-lg'>
   <img className='w-90 h-48 object-cover  rounded-t-lg' src="https://techcrunch.com/wp-content/uploads/2023/10/GettyImages-1350618660.jpg?w=430&h=230&crop=1" alt="" />
   
   <div className='p-6'>
      <h3 className='font-bold text-2xl'>Security</h3>
      <p className='mt-4 mb-3'>Okta plans to weave AI across its entire identity platform using multiple models.</p>
      <Link className='text-lg font-bold text-white rounded p-2 bg-black' to="#">ReadMore</Link>
    </div>
   </div>
   <div className=''>
   <img className='w-90 h-48 object-cover rounded-t-lg' src={web} alt="" />
   <div className='p-6'>
      <h3 className='font-bold text-2xl'>Artificial Intelligence</h3>
      <p className='mt-4 mb-3'>Rabbit is building an AI model that understands how software works.</p>
      <Link className='text-lg font-bold text-white rounded  p-2 bg-black' to="#">ReadMore</Link>
    </div>
   </div>
   <div className=''>
   <img className='w-90 h-48 object-cover rounded-t-lg' src= "https://techcrunch.com/wp-content/uploads/2023/10/copilot-screenshots.jpg?w=430&h=230&crop=1" alt="" />
   <div className='p-6'>
      <h3 className='font-bold text-2xl'>Apps</h3>
      <p className='mt-4 mb-3'>CoPilot, a training app that matches users with remote fitness coaches, raises $6.5M.</p>
      <Link className='text-lg font-bold text-white rounded p-2 bg-black' to="#">ReadMore</Link>
    </div>
   </div>
   
    </div>
    </div>
  )
}

export default Cards