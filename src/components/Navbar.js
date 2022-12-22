import React from 'react'
import '../utils/style.css'
import {TfiClose} from 'react-icons/tfi';
import MENU from '../assets/images/menu-icon.png';
import {motion} from 'framer-motion';


import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
  } from '@chakra-ui/react'
const Navbar = () => {


    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div className='h-24 w-full z-50 '>
        <div className=' h-24 w-screen bg-white transition-all ease-in duration-200 ' >
            <div className='w-[80%] h-full m-auto flex justify-between items-center'>
                <div className='flex  my-[20px] gap-2 cursor-pointer'>
                    <div className=' logo'>
                        <div className='logo-c1'>
                            <div className='logo-c2'>
                                <div className='logo-c3'>

                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className=' font-bold text-xl relative bottom-[2px]'>opus</h2>
                </div>

                <ul className='hidden  lg:flex gap-12 text-slate-500 font-semibold'>
                    <li className=' transition-all ease-in-out duration-200 hover:scale-75 cursor-pointer'>Overview</li>
                    <li className=' transition-all ease-in-out duration-200 hover:scale-75 cursor-pointer'>Pages</li>
                    <li className=' transition-all ease-in-out duration-200 hover:scale-75 cursor-pointer'>Template</li>
                </ul>

                <motion.button whileHover={{scale: 0.9}} className='hidden lg:flex btn-color text-white p-2'>Contact Us</motion.button>
                <button className='md:hidden border border-b-blue-50 p-2 py-3'
                        onClick={onOpen}
                        >
                        <img src={MENU} alt='menu'  /> 
                </button>
            </div>

            <Drawer onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerBody>
                  <div className='bg-slate-300 h-screen w-full flex justify-center items-center'>
                    <button className= 'btn-color text-white p-2'>Contact Us</button>
                    <button className='bg-slate-500 absolute bottom-0 h-10 w-full flex items-center justify-center'>
                        <TfiClose className='text-2xl text-white ' onClick={onClose} />
                    </button>
                  </div>
                </DrawerBody>
              </DrawerContent>
            </Drawer>

        </div>
    </div>
  )
}

export default Navbar