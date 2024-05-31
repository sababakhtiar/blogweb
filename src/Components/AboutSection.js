
import React from 'react'
import about from "../Assest/about.png"

const AboutSection = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-white">
    <div className="bg-white  flex flex-col lg:flex-row max-w-5xl mx-auto overflow-hidden">
      <div className="lg:w-1/2 p-8">
        <h2 className="text-4xl text-align-center font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-700 mb-4 text-justify  bg-gradient-to-r from-gray-300 to-transparent">
          Welcome to our blog! Our mission is to inspire and educate our readers through insightful and engaging content. Founded on the principles of curiosity and passion for learning, our blog covers a wide range of topics that cater to diverse interests.
        </p>
        <p className="text-gray-700 mb-4 text-justify  bg-gradient-to-r from-gray-300 to-transparent">
           We aim to provide valuable information and unique perspectives. Our team of dedicated writers and experts work tirelessly to ensure each post is well-researched and thoughtfully written. We believe in the power of knowledge and the importance of community, and we are committed to fostering a space where ideas can be shared and conversations can flourish.
        </p>
        <p className="text-gray-700 text-justify bg-gradient-to-r from-gray-300 to-transparent">
          Thank you for choosing us. We look forward to serving you and building a lasting relationship.
        </p>
      </div>
      <div className="lg:w-1/2">
        <img src={about} alt="About Us" className="w-full h-[80%] mt-14 ml-9"/>
      </div>
    </div>
  </div>
  )
}

export default AboutSection
