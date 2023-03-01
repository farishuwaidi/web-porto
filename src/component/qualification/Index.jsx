import React from 'react'
import { useState } from 'react'
import Education from './education'
import Experience from './experience'
import Skill from './skill'

const Index = () => {
  const [toggleState,setToggleState] = useState(1)
  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <div className='mt-10 py-20 lg:px-36 md:px-10'>
      <h1 className='text-center text-primary font-bold text-3xl'>Qualification</h1>
      <p className='text-gray-500 text-center mb-5'>My Personal Journey</p>
      <div className='pt-3 pb-20 flex justify-center containers lg:px-36 md:px-10 items-center'>
        <div className='bg-slate-200 py-2 px-2 text-primary rounded-2xl flex'>
          <button id='exp' className={toggleState === 1 ? 'py-2 px-4 bg-white mx-1 rounded-xl font-semibold transition duration-300 qual-active' : 'py-2 px-4 bg-white mx-1 hover:bg-slate-300 rounded-xl font-semibold transition duration-100 qual-nonactive '} onClick={()=> toggleTab(1)}>Experience</button>
          <button id='edu' className={toggleState === 2 ? 'py-2 px-4 bg-white mx-1 rounded-xl font-semibold transition duration-300 qual-active' : 'py-2 px-4 bg-white mx-1 hover:bg-slate-300 rounded-xl font-semibold transition duration-100 qual-nonactive'} onClick={()=> toggleTab(2)}>Education</button>
          <button id='skill' className={toggleState === 3 ? 'py-2 px-4 bg-white mx-1 rounded-xl font-semibold transition duration-300 qual-active' : 'py-2 px-4 bg-white mx-1 hover:bg-slate-300 rounded-xl font-semibold transition duration-100 qual-nonactive'} onClick={()=> toggleTab(3)}>Skill</button>
        </div>
      </div>
      {toggleState === 1 ? <Experience /> : (toggleState === 2) ? <Education /> : <Skill />}
    </div>
  )
}

export default Index
