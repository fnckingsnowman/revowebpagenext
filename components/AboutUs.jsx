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
            <h3 className="text-xl font-semibold text-white">
                    Tongtong Wang 
                    <span className="text-gray-400 text-sm ml-2">(basement gremlin) jesus/christ</span>
            </h3>
            <p className="text-gray-400">Founder of Tongtonginc, CEO, Lead electronics and firmware developer for Revolute, Lead designer, web backend developer, advertizing director, Apple OS software developer</p>
            <ul className="list-disc list-inside text-gray-200 mt-4 space-y-2">
              <li>'25 class highschooler studying at Shanghai United International School</li>
              <li>Planning to major in Electrical and Computer Engineering in college in the United States</li>
              <li>Crazy fucking fan of Apple.inc; certified Apple developer and owns a MacBookPro with 96GB of ram just to have everything open all the time without the computer slowing down</li>
              <li>Proficient in C/C++, Python, Swift, JavaScript, and somewhat capable in other languages</li>
              <li>Skilled in developing with Zephyr RTOS on nRF52 series SoCs</li>
              <li>Experienced in networking, managing servers, and backend development</li>
              <li>Highly skilled in KiCad circuit board design, Fusion 360 CAD software, and Blender animations</li>
              <li>Skilled in 3D printing and designing mechanical parts</li>
            </ul>

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
            <h3 className="text-xl font-semibold text-white">
                    T Zhong
                    <span className="text-gray-400 text-sm ml-2">(alcoholic snowman) fuck/me</span>
            </h3>
            <p className="text-gray-400">Product/Project Manager, web Frontend developer, electronics and mechanical engineer, campaign manager/organizer, advertizing director, Windows software developer</p>
            <ul className="list-disc list-inside text-gray-200 mt-4 space-y-2">
              <li>'25 class highschooler studying at Montverde Shanghai Academy (Shanghai Future Technology Highschool)</li>
              <li>Ex Student Athlete in golf turned engineering hobbyist</li>
              <li>Planning to major in Electrical and Computer Engineering in college in the United States</li>
              <li>Proficient in C/C++, JavaScript, React, Nextjs, Electron, and somewhat capable in other languages/frameworks</li>
              <li>Skilled in KiCad circuit board design, Fusion 360 CAD software, and Solidworks CAD software</li>
              <li>Skilled in 3D printing and designing mechanical parts</li>
              <li>Studied and researched on ASIC and FPGA Chip Designing</li>
              
            </ul>


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
