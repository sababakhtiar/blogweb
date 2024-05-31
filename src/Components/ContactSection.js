import React from 'react'
import conta from "../Assest/contact.png"

const ContactSection = () => {
  return (
   
              
        <div className="h-screen flex items-center justify-center bg-white">
      <div className="bg-white rounded-lg  flex max-w-5xl mx-auto">
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label  className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"/>
            </div>
            <div>
              <label  className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"/>
            </div>
            <div>
              <label  className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"></textarea>
            </div>
            <div>
              <button  type="submit" className="w-full bg-black text-white px-4 py-2 rounded-md shadow-sm hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">Send Message</button>
            </div>
          </form>
        </div>
        <div className="hidden lg:block lg:w-1/2">
          <img src={conta} alt="Contact Us" className="w-full h-full  rounded-r-lg"/>
        </div>
      </div>
    </div>
   
  )
}

export default ContactSection