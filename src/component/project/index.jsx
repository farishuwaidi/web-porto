import React from 'react'
import lapif from './img/1.png'
import kasire from './img/2.png'
import menit from './img/3.png'
import {BsGithub} from 'react-icons/bs'
import {RiShareBoxFill} from 'react-icons/ri'

const index = () => {

  const proyekItem = [
    {urlImg: lapif, name: "Lapif", gitLink: "https://github.com/fajarmuhamad616/discite-institute-web", view: "https://lapif.netlify.app/"},
    {urlImg: kasire, name: "Kasire", gitLink: "https://github.com/farishuwaidi/sidebar-dashboard", view: "https://sidebar-dashboard-five.vercel.app/"},
    {urlImg: menit, name: "Menitcom", gitLink: "https://github.com/farishuwaidi/apinewb", view: "https://apinew-r5i6k9z9x-farishuwaidi.vercel.app/"},

  ]
  return (
    <div className='bg-primary py-12 px-10 lg:px-36'>
        <h1 className='text-center text-white text-3xl font-semibold'>My Projects</h1>
        <div className='w-full flex justify-center'>
          <span className='inline-block bg-white mt-1 h-1 w-44'></span>
        </div>
        <div className='flex flex-wrap justify-center mt-10'>
          {proyekItem.map((item)=>(
          <div className='w-full md:w-[45%] mx-3 xl:mx-2 xl:w-[300px] bg-slate-100 rounded-2xl p-4 shadow-xl my-1'>
            <img src={item.urlImg} alt="preview" className='h-[250px] object-cover shadow-lg'/>
            <h3 className='text-xl font-semibold text-gray-600 mt-2'>{item.name}</h3>
            <div className='flex justify-between mt-3'>
              <a href={item.gitLink} className='flex items-center gap-1 py-1 text-white text-lg px-6 bg-primary hover:bg-slate-600 rounded-full'><BsGithub/> Github</a>
              <a href={item.view} className='flex items-center gap-1 py-1 text-white text-lg px-6 bg-primary hover:bg-slate-600 rounded-full'><RiShareBoxFill /> Preview</a>
            </div>
          </div>
          ))}
        </div>
    </div>
  )
}

export default index
