import React from 'react'

//icons
import { RiCheckboxBlankCircleFill, RiInstagramLine, RiFacebookLine, RiTwitterLine, RiGithubLine} from "react-icons/ri";

const Footer = () => {


  return (
    <footer className='bg-footer p-8 xl:p-20 relative z-10'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4 border-b p-8 border-gray-500'>
            {/*Logo */}
            <div className='w-1/6'>
                <a 
                    href='#' 
                    className='text-2xl font-bold relative p-1 bg-footer -mt-4 text-white'>Power<span className='text-primary text-5xl'>.</span>{" "} 
                    <RiCheckboxBlankCircleFill 
                    className='text-primary absolute -left-3 -bottom-3 -z-10'/>
                </a>
            </div>            
            {/*Social Media */}
            <nav className='flex flex-col md:flex-row items-center gap-4'>                
                    <a href='' className='block  bg-primary text-white p-4 rounded-full'>
                        {" "}
                        <RiInstagramLine/>{" "}
                    </a>

                    <a href='' className='block  bg-primary text-white p-4 rounded-full'>
                        {" "}
                        <RiFacebookLine/>{" "}
                    </a>

                    <a href='' className='block  bg-primary text-white p-4 rounded-full'>
                        {" "}
                        <RiTwitterLine/>{" "}
                    </a>

                    <a href='' className='block  bg-primary text-white p-4 rounded-full'>
                        {" "}
                        <RiGithubLine/>{" "}
                    </a>                
            </nav>
           
        </div>

        <div className='mt-8'>
            <h3 className='text-lg font-bold text-white text-center md:text-left'>Company</h3>
            <nav className='mt-4 flex flex-col md:flex-row items-center justify-between gap-4'>
                <a href='#' className='text-gray-300 mt-4 hover:text-white transition-colors'>About Us</a>
                <a href='#' className='text-gray-300 mt-4 hover:text-white transition-colors '  >Press</a>
                <a href='#' className='text-gray-300 mt-4 hover:text-white transition-colors ' >Investors</a>
                <a href='#' className='text-gray-300 mt-4 hover:text-white transition-colors ' >Events</a>
                <a href='#' className='text-gray-300 mt-4 hover:text-white transition-colors ' >Team of use</a>
                <a href='#' className='text-gray-300 mt-4 hover:text-white transition-colors ' >Privacy policy</a>      

                <button 
                    type='button'  
                    className=' bg-primary text-white text-lg font-semibold py-2 px-6 rounded-xl '>
                    Contact Us
                </button>
            </nav>
            
        </div>

        <div className='mt-20'>
            <p className='text-gray-300 text-center'>@ Soluciones Informáticas 2023 - All Rights Reserved</p>
        </div>
      
    </footer>
  )
}

export default Footer
