import React from 'react'
import '../utils/style.css'
import PROJECT from '../assets/images/project.png';
import ANALYTICS from '../assets/images/analytics.png';
import MARKETING from '../assets/images/marketing.png';

const WorkCard = (props)=>{

    return(
        <div className='m-auto w-[21rem]'>
            <img src={props.img} alt={props.img} className='w-[21rem]' />
            <h2 className='text-2xl font-bold text-white py-10'>{props.heading}</h2>
            <h5 className='font-semibold text-slate-400'>{props.lorem}</h5>
        </div>        
    )

}


const Work = () => {

    const cardItems = [
        {   id: 1,
            img: PROJECT,
            heading: "Project Management",
            lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat."
        },
        {
            id:2,
            img: ANALYTICS,
            heading: "Advance Ananlytics",
            lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat."
        },
        {   
            id:3,
            img: MARKETING,
            heading: "Marketing & Dashboard",
            lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat."
        },
    ]

  return (
    <div className='w-screen h-screen bg m-auto work-bg-blue'>
        <div className='w-[90%] lg:w-[75%] m-auto pt-40'>
            <div className='flex w-[80%] m-auto py-14 justify-between'>
                <h2 className='text-3xl font-extrabold h-20 text-white'>Ways to work with us</h2>
                <button className='btn-color text-white p-2 h-fit w-[8rem]'>Get Started</button>
            </div>
            <div className='flex flex-col lg:flex-row gap-10 p-5'>
                {
                    cardItems.map((elm, i)=>{
                        return (
                                <WorkCard key={i} img={elm.img} heading={elm.heading} lorem={elm.lorem} />
                        )
                })
            }
            </div>
        </div>
    </div>
  )
}

export default Work