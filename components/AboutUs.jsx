import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa'; // Import some icons

const AboutUs = () => {
  return (
    <div>
        
      <div className="text-center mb-10">
        <span className="text-4xl font-bold text-white"> Our Dev Team</span>
        <br />
        <div className="text-lg text-gray-400 px-10 pt-5">
          We're just two high schoolers from Shanghai that's soon to be headed for college in the United States in 2025.
        </div>
      </div>

      <div className="container mx-auto flex place-content-center image-text-container">
        {/* Developer 1 */}
        <div className='w-full md:w-2/3 p-6 grid place-items-center'>
          <div className="bg-gray-800 p-6 rounded-lg">
            <img 
              src="/img/aboutuspics/tongtongpic.jpg" 
              alt="Developer 1" 
              className="w-40 h-40 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-white">Tongtong Wang</h3>
            <p className="text-gray-400">Short description about Developer 1 goes here.</p>

            {/* Icons for Developer 1 with tooltips */}
            <div className="flex justify-center mt-4 space-x-4">
              <a href="https://github.com/tongtongwang86" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400" title="Github: @tongtongwang86">
                <FaGithub size={24} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400" title="LinkedIn: ">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:tongx2@hotmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400" title="Email: tongx2@hotmail.com">
                <FaEnvelope size={24} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400" title="Instagram">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Developer 2 */}
        <div className='w-full md:w-2/3 p-6 grid place-items-center'>
          <div className="bg-gray-800 p-6 rounded-lg">
            <img 
              src="/img/aboutuspics/tpic.jpg" 
              alt="Developer 2" 
              className="w-40 h-40 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-white">T Zhong</h3>
            <p className="text-gray-400">Short description about Developer 2 goes here.</p>

            {/* Icons for Developer 2 with tooltips */}
            <div className="flex justify-center mt-4 space-x-4">
              <a href="https://github.com/fnckingsnowman" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400" title="Github: @fnckingsnowman">
                <FaGithub size={24} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400" title="LinkedIn: ">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:ttz0319@hotmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400" title="Email: ttz0319@hotmail.com">
                <FaEnvelope size={24} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400" title="Instagram">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AboutUs;
