import React from 'react'
import abot from "../Assest/com.png"
const HomeSection = () => {
  return (
    <div className='mb-3'>
             <h1 className='m-20 font-bold text-3xl font-Roboto sm:text-sm md:text-lg lg:text-3xl text-[#212121] text-center'>Facilitate Your Life</h1>
      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 max-w-6xl mx-auto">
       
  <img  className="w-full max-w-md m-auto"src={abot} alt=""/>
  <div>
    <h3 className='font-bold text-xl mt-4 text-black-800'>Building Your Email List</h3>
    <p className='mt-1'>Creating an email list for your blog is simple and effective. Start building your audience today and enhance your marketing efforts.</p>
    <h3 className='font-bold text-xl mt-4 text-black-800'>Tracking Your Blog Campaigns</h3>
    <p className='mt-1'>Managing your blog campaigns is crucial for success. Our platform provides the tools you need to track and optimize your efforts.</p>
    <h3 className='font-bold text-xl mt-4 text-black-800'>Analyzing Blog Performance</h3>
    <p>Gain insights into your blog's performance with our comprehensive analytics tools. Understand your audience and improve your content strategy.</p>
  </div>
  <div>
    <h3 className='font-bold text-xl mt-4 text-black-800'>Admin Control for Your Blog</h3>
    <p className='mt-1'>Manage user roles and permissions effortlessly with our admin control panel, ensuring your blog runs smoothly and securely.</p>
    <h3 className='font-bold text-xl mt-4 text-black-800'>Integrating New Features</h3>
    <p className='mt-1'>Follow our easy integration guide to add new features and automate tasks on your blog, making management simpler and more efficient.</p>
    <h3 className='font-bold text-xl mt-4 text-black-800'>Support for Bloggers</h3>
    <p className='mt-1'>Our dedicated support team is here to help you with any issues you encounter. Reach out to us for quality assistance at any time.</p>
 
 
  </div>
</section>
    </div>
  )
}

export default HomeSection
