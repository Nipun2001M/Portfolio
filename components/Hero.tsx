import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenarateEffect'
import MagicButton from './ui/MagicButton'
import { FaCloudDownloadAlt, FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='pb-20 pt-36 '>
      {/* if remove image padding top 36 */}
      {/* without image pt 4 */}
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32
             md:-top-20 h-screen"
             fill='white'/>

<Spotlight className="top-10 left-full h-[80vh] w-[50vw]"
             fill="purple"/>

<Spotlight className="top-28 left-80 h-[80vh] w-[50vw]"
             fill="blue"/>
        </div>
        
        <div className="h-screen w-full dark:bg-black-100 bg-white 
         dark:bg-grid-white/[0.03] bg-grid-black/[0.2] 
          flex items-center justify-center
          absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 
      flex items-center justify-center dark:bg-black-100
       bg-white
        [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
     
    </div>
    
    <div className='flex justify-center relative my-20 z-10 ' >
    
        <div className='max-w-[89wv] md:max-w-2xl lg:max-w-[60vw]
        flex flex-col items-center justify-center'>
           
           
           <TextGenerateEffect
           className='text-center text-[50px] md:text-5xl lg:text-8xl '
          
           words="Hello, I'm Nipun Madhushan "

           />
           {/* <img src='/myimage2.png' className='w-[25rem] h-[25rem] mb-0 pb-0 '></img> */}
           <p className='text-center md:tracking-wider
           mb-6 text-small md:text-large  lg:text-xl   '>
          A full-stack developer passionate about creating efficient web applications.
           </p> 
           
          
          <div className='flex flex-row gap-6'>
          <a href='#about' >
            <MagicButton
            title="Explore My Background"
            icon={<FaLocationArrow/>}
            />
           </a>
           <a href="/CV.pdf" download="cv">
            <MagicButton
            title="Download CV"
            icon={<FaCloudDownloadAlt/>}
            />
           </a>
          </div>
           
    
        </div>
       

    </div>

    </div>
  )
}

export default Hero