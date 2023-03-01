import React from 'react'
import logo from './logo.png'

const index = () => {
  
  const humberger = () => {
    document.querySelector('#hamburger').classList.toggle('hamburger-active')
    document.querySelector('#navMenu').classList.toggle('-mr-80')
  }
  const navlink = [
    {name: "Home", link: "#home"},
    {name: "About", link: "#about"},
    {name: "Qualification", link: "#qualification"},
    {name: "Projects", link: "#project"},
    {name: "Contact", link: "#contact"},
  ]
  return (
    <navbar id='navbar' className="flex justify-between bg-gray-50 py-4 fixed items-center lg:px-36 md:px-10 shadow-lg w-full z-50">
      <div>
        <a href="/" className="flex text-xl font-bold text-primary ml-4">
          <img src={logo} alt="LOGO" className='h-8'/>
          farishuwaidi
        </a>
      </div>
      <div className='flex items-center px-4'>
        <button id='hamburger' name='hamburger' type='button' onClick={humberger} className='block absolute right-4 lg:hidden'>
          <span className='hamburger-line transition duration-300 ease-in-out origin-top-left'></span>
          <span className='hamburger-line transition duration-300 ease-in-out'></span>
          <span className='hamburger-line transition duration-300 ease-in-out origin-bottom-left'></span>
        </button>
      </div>
      <nav id='navMenu' className='-mr-80 lg:mr-0 duration-500 absolute py-5 px-3 lg:py-0 bg-white shadow-lg rounded-lg max-w-[300px] w-full right-4 top-full lg:right-0-full lg:block lg:static lg:bg-transparent lg:max-w-full  lg:shadow-none lg:rounded-none'>
        <ul className='block lg:flex lg:justify-end'>
          {navlink.map((links)=>(
            <li className='group mx-2 my-3'><a href={links.link} className='text-dark font-medium text-lg group-hover:text-primary transition duration-200'>{links.name}</a></li>
          ))}
        </ul>
      </nav>
    </navbar>
  )
}

export default index
