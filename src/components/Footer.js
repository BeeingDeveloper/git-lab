import React from 'react'
import '../utils/style.css';
import {motion} from 'framer-motion'

const Footer = () => {

    const overview = [
        {pageName: "Overview"},
        {pageName: "Landings"},
        {pageName: "Company"},
        {pageName: "Pricing"},
        {pageName: "CMS Pages"},
        {pageName: "Accounts"},
        {pageName: "Buy for Figma"},
    ]

    const pages1 = [
        {pageName: "Landing 1"},
        {pageName: "Landing 2"},
        {pageName: "Landing 3"},
        {pageName: "Company 1"},
        {pageName: "Company 2"},
        {pageName: "Company 3"},
        {pageName: "Blog 1"},
        {pageName: "Blog 2"},
        {pageName: "Contact 1"},
        {pageName: "Contact 2"},
        {pageName: "Contact 3"},
    ]
    const pages2 = [
        {pageName: "Case Studies"},
        {pageName: "Careers"},
        {pageName: "Pricing 1"},
        {pageName: "Pricing 2"},
        {pageName: "Pricing 3"},
        {pageName: "Login"},
        {pageName: "Register"},
        {pageName: "Forgot Password"},
        {pageName: "Blog Post"},
        {pageName: "Team Member"},
        {pageName: "Case Study"},
        {pageName: "Job Post"},

    ]

  return (
    <div className='w-[90%] lg:w-[70%] h-auto m-auto flex flex-col gap-10'>
        <div className=' h-16 flex'>
            <div className='flex justify-center items-center gap-2'>
                <div className=' logo'>
                    <div className='logo-c1'>
                        <div className='logo-c2'>
                            <div className='logo-c3'>

                            </div>
                        </div>
                    </div>
                </div>
                <h2 className='text-2xl font-extrabold'>Opus</h2>
            </div>
        </div>

        <div className='flex flex-col lg:flex-row lg: justify-between gap-10'>
            <div className='flex w-[50%] justify-between flex-col gap-20 lg:gap-0 lg:flex-row'>
                <div>
                    <h2 className='font-bold text-slate-400 pb-5 lg:pb-10'>OVERVIEW</h2>
                    <ul>
                        {
                            overview.map((elm, i)=>{
                                return(
                                    <motion.li whileHover={{scale: 0.9}} key={i} className='font-bold leading-10 cursor-pointer hover:text-slate-500 transition-all ease-in-out duration-200'>{elm.pageName}</motion.li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div>
                    <h2  className='font-bold text-slate-400 pb-5 lg:pb-10'>PAGES</h2>
                    <ul>
                        {
                            pages1.map((elm, i)=>{
                                return(
                                    <motion.li whileHover={{scale: 0.9}} key={i} className='font-bold leading-10 cursor-pointer hover:text-slate-500 transition-all ease-in-out duration-200'>{elm.pageName}</motion.li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div>
                    <h2  className='font-bold text-slate-400 pb-5 lg:pb-10'>PAGES</h2>
                    <ul>
                        {
                            pages2.map((elm, i)=>{
                                return(
                                    <motion.li whileHover={{scale: 0.9}} key={i} className='font-bold leading-10 cursor-pointer hover:text-slate-500 transition-all ease-in-out duration-200'>{elm.pageName}</motion.li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>


            <div className='w-[100%] lg:w-[30%] flex flex-col gap-14  '>
                <div className='flex'>
                    <input className='bg-slate-200 w-[18rem] outline-none pl-2  border border-slate-400' placeholder='Email Address' />
                    <motion.button whileHover={{scale: 0.9}} className='btn-color p-3 text-white font-bold'>Get Started</motion.button>
                </div>
                <div className='flex w-[100%] justify-between gap-10 lg:gap-0  flex-col lg:flex-row'>
                    <div className='flex flex-col gap-5'>
                        <h4 className='text-slate-400 font-bold '>OPUS FOR WEBFLOW</h4>
                        <h2 className='text-2xl font-bold'> <a href='#'>Lorem Ipsum</a> </h2>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h4 className='text-slate-400 font-bold '>OPUS FOR WEBFLOW</h4>
                        <h2 className='text-2xl font-bold'> <a href='#'>Lorem Ipsum</a> </h2>
                    </div>
                </div>

                <h4 className='text-slate-400 w'>?? Template by <a href='#' className='font-bold'>Lorem</a> - Powered by <a href='#' className='font-bold'>Ipsum</a></h4>
            </div>
        </div>
        <hr/>
        <div className='flex gap-10 text-slate-400 pb-10'>
            <h5>Style Guide</h5>
            <h5>Licence</h5>
            <h5>Changelog</h5>
        </div>
    </div>
  )
}

export default Footer