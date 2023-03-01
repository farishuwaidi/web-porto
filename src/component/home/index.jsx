import React from 'react'
import heroimg from './hero.png'
const index = () => {
  return (
    <div className='pt-36 pb-20 lg:flex lg:px-36 md:px-10 items-center'>
      <div className='px-5'>
        <h3 className='text-dark font-bold text-xl'><span className='text-primary text-xl'>Hello Everyone</span>, My name is</h3>
        <h1 className='text-5xl font-bold'>Faris Huwaidi</h1>
        <h4 className='text-gray-600 text-xl font-semibold'>Web Developper Antusiasm</h4>
        <p className='tex-dark text-gray-500 text-lg'>I am a web developer with several experiences in website development. I master various tools to build a website. If you need my services, press the following button</p>
        <br />
        <a href="/" className='py-3 px-6 bg-primary hover:bg-zinc-600 duration-200 rounded-full text-white text-xl font-semibold'>Contact</a>
      </div>
      <div className='px-4'>
        <div className='relative'>
          <img src={heroimg} alt="hero" className='w-2/3 mx-auto lg:mr-0' />
          <span className='absolute -bottom-52 md:-bottom-20  -z-10 left-1/2 -translate-x-1/2 lg:-translate-x-1/3'>
            <svg width={600} height={600} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#507DBF" d="M57.1,-22.2C60.6,-7.9,40.7,10.4,17.8,27.9C-5.2,45.5,-31.3,62.2,-45,54.1C-58.6,46,-59.9,13.1,-50.3,-9.7C-40.8,-32.4,-20.4,-45,3.2,-46C26.8,-47.1,53.7,-36.6,57.1,-22.2Z" transform="translate(100 100)"/>
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}

export default index
