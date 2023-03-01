import React from 'react'
import HtmlPng from './img/html.png'
import CssPng from './img/css-3.png'
import JsPng from './img/js.png'
import figma from './img/figma.png'
import BsPng from './img/bootstrap.png'
import RePng from './img/physics.png'
import TailPng from './img/Vector.png'
import WpPng from './img/wordpress.png'
import GitPng from './img/Git.png'
import SqlPng from './img/mysql.png'


const index = () => {
  return (
    <div className='flex flex-wrap justify-center'>
      <div className='flex justify-center w-1/2 md:w-1/3 xl:w-1/4 my-3 text-dark font-semibold gap-2 items-center'>
        <img src={HtmlPng} alt="html" />
        <h4>HTML</h4>
      </div>
      <div className='flex justify-center w-1/2 md:w-1/3 xl:w-1/4 my-3 text-dark font-semibold gap-2 items-center'>
        <img src={CssPng} alt="html" />
        <h4>CSS</h4>
      </div>
      <div className='flex justify-center w-1/2 md:w-1/3 xl:w-1/4 my-3 text-dark font-semibold gap-2 items-center'>
        <img src={JsPng} alt="html" />
        <h4>Javascript</h4>
      </div>
      <div className='flex justify-center w-1/2 md:w-1/3 xl:w-1/4 my-3 text-dark font-semibold gap-2 items-center'>
        <img src={BsPng} alt="html" />
        <h4>Bootstrap</h4>
      </div>
      <div className='flex justify-center w-1/2 md:w-1/3 xl:w-1/4 my-3 text-dark font-semibold gap-2 items-center'>
        <img src={figma} alt="html" />
        <h4>Figma</h4>
      </div>
      <div className='flex justify-center w-1/2 md:w-1/3 xl:w-1/4 my-3 text-dark font-semibold gap-2 items-center'>
        <img src={RePng} alt="html" />
        <h4>React JS</h4>
      </div>
      <div className='flex justify-center w-1/2 md:w-1/3 xl:w-1/4 my-3 text-dark font-semibold gap-2 items-center'>
        <img src={TailPng} alt="html" />
        <h4>Tailwind CSS</h4>
      </div>
      <div className='flex justify-center w-1/2 md:w-1/3 xl:w-1/4 my-3 text-dark font-semibold gap-2 items-center'>
        <img src={WpPng} alt="html" />
        <h4>WordPress</h4>
      </div>
      <div className='flex justify-center w-1/2 md:w-1/3 xl:w-1/4 my-3 text-dark font-semibold gap-2 items-center'>
        <img src={GitPng} alt="html" />
      </div>
      <div className='flex justify-center w-1/2 md:w-1/3 xl:w-1/4 my-3 text-dark font-semibold gap-2 items-center'>
        <img src={SqlPng} alt="html" />
      </div>
    </div>
  )
}

export default index
