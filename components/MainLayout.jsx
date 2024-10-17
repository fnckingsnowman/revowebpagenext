import React from 'react'
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'

const MainLayout = ({ children }) => {
  return (
    <div>
      <MainHeader />
      <div className="max-h-fit-content min-h-screen grid place-items-center">
        <video autoPlay loop muted className="w-3/4 h-3/4">
          <source src="./img/Revolute2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container mx-auto py-10 flex place-content-center image-text-container">
        <div className="w-full md:w-1/2">
          <img
            src="./img/swdemo1.png"
            alt="Description of the image"
            className="h-auto max-w-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 grid place-items-center">
          <p className="text-lg text-white">
            The <span className="text-3xl font-bold">Revolute</span> is a{' '}
            <span className="text-3xl font-bold">Smart Dial/Scroll Wheel Device</span> that allows users to perform
            various actions through simple rotation, making it easier to manage complex tasks/software applications
            without constantly clicking back and forth.
          </p>
        </div>
      </div>

     

      <div className="container mx-auto py-10 flex place-content-center image-text-container">
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
            className="h-auto max-w-full object-cover rounded-lg shadow-lg"
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
            <span className="text-3xl font-bold">Magtic Virtual-Idents</span> 36 Precision-Placed Magnets provide an
            incremental snap feel, creating a controlled Single Stepping mechanism for the Revolute.
          </p>
        </div>
        <div className="w-full md:w-1/2 p-10">
          <img
            src="./img/magstsssicts.png"
            alt="Description of the image"
            className="h-auto max-w-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
      <main>{children}</main>
      <MainFooter />
    </div>
  )
}

export default MainLayout
