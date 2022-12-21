import React from 'react';
import '../utils/style.css';
import {BsArrowRight} from 'react-icons/bs';
import MANIMG from '../assets/images/man.png';
import DOT from '../assets/images/dots.png';
import _L from '../assets/images/l-logo.png';
import {RiMouseLine} from 'react-icons/ri';



const Home = () => {
    const fields= [];
    for (let i = 1; i <= 42; i++) {
      fields.push(<div className=' h-2 w-10 mr-20 mb-10 ' key={i}>
        <img src={DOT} alt="dot" />
      </div>);
    }

  return (
    <>
    <div className='w-screen h-50rem bg-blue'>
        <div className=' h-12 w-screen flex bg-white'>
            <div className='h-full w-10 small-box ml-52'>

            </div>
            <div className='hidden lg:flex flex-col absolute right-0 h-[718px] w-[529.19px] '>
                <div className='h-[80%] w-full small-box bg-red-600 '>
                    <div className='h-28 w-64 grid grid-cols-7 dots pt-10'>
                        {fields}
                    </div>
                </div>

                <div className='h-[20%] bg-white'>

                </div>
            </div>
        </div>

{/* INTRO */}
        <div className='text-white flex flex-col  h-full  w-[60%] m-auto pt-20 '>
            <div className='flex w-full h-full flex-col lg:flex-row  '>
                <div className='w-[50%] h-auto justify-items-center items-center '>
                    <h2 className='text-[2rem] lg:text-[5rem] font-bold text-center lg:text-left line-h'> 
                        Built for<span className='flex gap-5'>enterprise<img src={_L} alt='l' className='h-10 lg:h-20' /></span> business
                        </h2>

                    <h5 className='text-slate-300'>Opus includes everything you need to build a beautiful website for your business. Built to perform and look good doing so.</h5>
                    
                    <div className=' flex h-fit gap-8'>
                        <button className='btn-color p-3 flex gap-3'>
                            Learn More 
                            <BsArrowRight className='h-fit text-xl my-auto' /> 
                        </button>
                        <h2 className='my-auto'>Explore Pages</h2>
                    </div> 
                </div>


                <div className='w-[50%] h-[587.5px] z-20 pt-16 '>
                    <div className='flex'>
                        <img alt='man' src={MANIMG} className='h-[587.5px] w-[470px] man-img' />
                        <div className=' relative bottom-[48px] h-[48px] w-[48px] img-sm-box'></div>
                    </div>

                    <div className='relative hidden lg:block bottom-60 left-[40%] h-[15rem] w-[18rem] p-10 bg-white text-black  flex-col gap-10'>
                        <h5>I felt like I couldn’t grow until I moved to Opus. Now I am encouraged to sell more with them.</h5>
                        <h2 className='text-2xl font-bold'>
                            Frank Dublin<br/>
                            <span className='text-sm'>CEO <a href='#'>@STAMPS</a> </span>
                        </h2>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className='hidden lg:flex w-full h-28'>
        <div className='bg-green-600 h-full w-[50%] m-auto flex'>
            <div className='bg-slate-200 h-full w-[40%] flex justify-center items-center'>
                <div className='flex gap-3'>
                    <RiMouseLine className='text-xl scrl-4-more' />
                    <h2 className=' font-bold scrl-4-more'>SCROLL FOR MORE</h2>
                </div>
            </div>
            <div className='small-box h-full w-[60%]'></div>
        </div>
    </div>
    </>
  )
}

export default Home