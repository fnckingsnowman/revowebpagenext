"use client";
import React from 'react'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'
import Carousel from './MainVideoDisplay'
import AboutUs from './AboutUs'
import SuperEllipse from 'react-superellipse';

/*
import demo1 from './img/demovids/1.mp4'
import demo2 from './img/demovids/2.mp4'
import demo3 from './img/demovids/3.mp4'
import demo4 from './img/demovids/4.mp4'
*/
//const VIDEOS = [demo1, demo2, demo3, demo4]

const slides = [
'/img/demovids/1.mp4',
'/img/demovids/2.mp4',
'/img/demovids/3.mp4',
'/img/demovids/4.mp4'
]

const MainLayout = ({ children }) => {
  return (
    <div>
      <MainHeader />
      <div className="max-h-fit-content min-h-screen grid place-items-center">
        <video autoPlay loop muted playsInline className="w-3/4 h-3/4">
          <source src="./img/Revolute2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container mx-auto py-10 flex place-content-center image-text-container ">
        <div className="w-full md:w-1/2">
          <img
            src="./img/swdemo1.png"
            alt="Description of the image"
            className="h-auto max-w-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 grid place-items-center">
          <div className="text-lg text-white">
            The <span className="text-3xl font-bold">Revolute</span> is a{' '}
            <span className="text-3xl font-bold">Smart Dial/Scroll Wheel Device</span> that allows users to perform
            various actions through simple rotation, making it easier to manage complex tasks/software applications
            without constantly clicking back and forth.
          </div>
        </div>
      </div>

      

      <div className='container mx-auto py-10 place-content-center image-text-container'>
        <div className='text-5xl text-center pb-5'>Customizable configurations for different applications</div>
        <Carousel>
          {slides.map((s) => (
            <video key={s} src={s} autoPlay muted loop playsInline className="w-full h-auto" />
          ))}
        </Carousel>
      </div>

      <div className="container mx-auto py-10 pt-40 flex place-content-center image-text-container">
        <div className="w-full md:w-1/2">
          <img
            src="./img/open1.png"
            alt="Description of the image"
            className="h-auto max-w-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 grid place-items-center">
          <p className="text-lg text-white">
            <span className="text-3xl font-bold">Li-ion Battery Powered</span> the Revolute is powered by a rechargeable
            3.7v lithium ion coin cell battery with a capacity of 70mAh, making the Revolute a rechargeable and
            repairable device.
          </p>
        </div>
      </div>

      <div className="container mx-auto py-10 flex place-content-center image-text-container">
        <div className="w-full md:w-1/2 p-6 grid place-items-center">
          <p className="text-lg text-white">
            <span className="text-3xl font-bold">Wireless system</span> a single circuit board the size of a coin
            contains all the functionalities of the Revolute. Utilizing the nRF52833 SoC by Nordic Semiconductors, the
            Revolute operates efficiently while establishing BLE connections and managing sensors and circuits.
          </p>
        </div>
        <div className="w-full md:w-1/2">
        <img
            src="./img/pcb1.png"
            alt="Description of the image"
            className="h-auto max-w-full object-cover shadow-lg"
          />
        </div>
      </div>

      <div className="container mx-auto py-10 flex place-content-center image-text-container">
        <div className="w-full md:w-1/2">
          <img
            src="./img/attachments1.png"
            alt="Description of the image"
            className="h-auto max-w-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 grid place-items-center">
          <p className="text-lg text-white">
            <span className="text-3xl font-bold">Attachments for the Revolute</span> different attachment bases allow the
            Revolute to be used on different devices and surfaces, making it intuitive for a wide range of applications.
          </p>
        </div>
      </div>

      <div className="container mx-auto py-10 flex place-content-center image-text-container">
  <div className="w-full md:w-1/2 p-6 grid place-items-center">
    <p className="text-lg text-white">
      <span className="text-3xl font-bold">Magnetic Virtual-Idents</span> 36 Precision-Placed Magnets provide an
      incremental snap feel, creating a controlled Single Stepping mechanism for the Revolute.
    </p>
  </div>
  
  <div className="w-full md:w-1/2 p-10 flex justify-center items-center">
    <img
      src="./img/magstsssicts.png"
      alt="Description of the image"
      className="h-auto max-w-full object-cover shadow-lg"
      style={{
        maskImage: "radial-gradient(ellipse at center, rgba(255, 255, 255, 1) 30%, rgba(255, 255, 255, 0) 70%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 0) 75%)",
        backdropFilter: "blur(10px)", // Adjust blur intensity as needed
      }}
    />
  </div>
</div>




      <div className="container mx-auto py-40 flex flex-col items-center">
    <div className="text-center mb-20 p-10">
        <div className="text-lg text-white">
            <span className="text-6xl font-bold">Revolute Development</span>
            <br />
            <div className='pt-5'>
              <span className="text-lg">
                <span className="text-3xl font-bold">The Revolute is still in the making;</span> this product will <span className="text-3xl font-bold">soon be available on CrowdSupply</span> as a crowdfunded project if you wish to purchase one.
                <br /> 
                <br /> 
                The development of this project has been ongoing for two years since the Shanghai pandemics in 2022. Managing our personal lives and academics while developing such a unique product in our spare time has been challenging; Staying consistent and persistent with a single project is pretty fucking exhausting and monotonous at times. However, it is still our long term objective to try and create projects of our own with our own skills and creativity to share it with the rest of the community.
            </span>
            </div>
            
        </div>
    </div>

   <AboutUs />

</div>

      <main>{children}</main>
      <MainFooter />
    </div>
  )
}

export default MainLayout
