import React from 'react';
import { assets } from '../assets/assets';  // Assuming you have the image in the assets folder
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <div
        className="flex flex-col md:flex-row flex-wrap bg-orange-500 rounded-lg px-6 md:px-10 lg:px-20 text-black"
        style={{
          backgroundImage: `url(${assets.food_5})`, // Replace 'yourImageName' with your actual image name
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* ---- Left Side ---- */}
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] ">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-tight lg:leading-tight">
            About Our Platform
          </h2>
          <p className="text-sm md:text-base font-dark text-black-2000 text-xl">
            Welcome to our food exploration platform! Here, we bring together a curated selection of dishes from diverse 
            cuisines to tantalize your taste buds. Whether you're craving something spicy, savory, or sweet, we've got you covered.
          </p>
          <p className="text-sm md:text-base font-light text-black-2000 text-xl">
            Our mission is to make food discovery easy, fun, and personalized for everyone. Dive in and find your next favorite meal!
          </p>
          <button className="bg-white text-orange-500 font-semibold py-2 px-4 rounded-full hover:bg-yellow-300 hover:text-white transition">
            Explore Now
          </button>
        </div>
      </div>   
    </div>
  );
};

export default About;
