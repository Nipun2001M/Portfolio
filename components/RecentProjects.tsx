import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'

const RecentProjects = () => {
  return (
    <div  className='py-20' id='projects' >
        <h1 className='heading  '>
        Projects I’ve {' '}
            <span className='text-purple'>Worked On</span>
            


        </h1>
        <div className='flex flex-wrap items-center justify-center
         p-4 gap-x-24  mt-10'>
            {projects.map((project)=>(
                <div key={project.id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem]


                h-[25rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                    <PinContainer title={project.title} >
                        <div className='relative flex items-center justify-center
                        sm:w-[570px] w-[80vw] sm:h-[40vh] h-[30vh] owerflow-hidden h-[20vh] lg:h-[30vh]'>
                            <div className='relative  w-full h-full overflow-hidden
                            lg:rounded-3xl bg-[#12162d]' >
                                <img src='/bg.png'></img>


                            </div>
                            <img src={project.img}
                            className='z-10 absolute bottom-0'
                            ></img>
                        </div>
                        <h1  className='
                        font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                            {project.title}
                        </h1>
                        <p
                        className='
                        lg:text-xl lg:font-normal font-light text-sm line-clamp-7  
                        
                        '>{project.des}</p>
                        <div className='flex items-center
                        justify-between mt-7 mb-3'>
                            <div className='flex items-center'>
                                {project.iconLists.map((icon)=>(
                                    <div key={icon} className='border-white
                                    rounded-full bg-black-100 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center '>
                                        <img className='p-2' src={icon}></img>
                                    </div>
                                ))}
                            </div>


                        </div>
                    </PinContainer>
                </div>
            ))}

        </div>
    </div>
  )
}

export default RecentProjects