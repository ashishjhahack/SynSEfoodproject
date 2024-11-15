import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-orange-500 rounded-lg px-6 md:px-10 lg:px-20 text-black relative">
      
      {/* ---- Left Side ---- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-tight lg:leading-tight">
          Get in Touch
        </h2>
        <p className="text-sm md:text-base font-dark text-black-2000">
          We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, 
          feel free to reach out to us anytime.
        </p>
        <form className="flex flex-col gap-4 w-full">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full py-2 px-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full py-2 px-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea 
            placeholder="Your Message" 
            rows="4"
            className="w-full py-2 px-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
          <button 
            type="submit" 
            className="bg-white text-orange-500 font-semibold py-2 px-4 rounded-full hover:bg-yellow-300 hover:text-white transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* ---- Full Background Image ---- */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${assets.food_6})` }}
      >
        {/* Empty content block for spacing */}
        <div className="w-full h-full bg-black opacity-40"></div>
      </div>
      
    </div>
  );
};

export default Contact;
