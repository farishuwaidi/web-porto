import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";

const index = () => {
  return (
    <div className='flex justify-center'>
      <table>
        <tr>
          <td width={300} className='text-right'>
            <h3 className='font-semibold text-gray-600'>Web Development</h3>
            <h2 className='font-bold text-lg'>Discite Institute</h2>
            <span className='text-gray-600'>Padang - Sumbar</span>
            <div className='flex justify-end text-gray-600'>
              <FaCalendarAlt className='h-5 w-4 mr-3'/> Feb - Jul 2022
            </div>  
          </td>
          <td width={20} className='text-center'>
            <span className='inline-block rounded-full translate-y-10 w-5 h-5 bg-dark'></span><br />
            <span className='inline-block w-1 translate-y-8 h-[140px] bg-dark'></span>
          </td>
          <td width={300}></td>
        </tr>
        <tr>
          <td width={300}></td>
          <td width={20} className='text-center'>
            <span className='inline-block rounded-full translate-y-5 w-5 h-5 bg-dark'></span><br />
            <span className='inline-block w-1 translate-y-3 h-[120px] bg-dark'></span>
          </td>
          <td width={300}>
            <h3 className='font-semibold text-gray-600'>Software Engineer</h3>
            <h2 className='font-bold text-lg'>PT IlmuKomputerCom Braindevs Sistema</h2>
            <span className='text-gray-600'>Cibubur - Jabar</span>
            <div className='flex text-gray-600'>
              <FaCalendarAlt className='h-5 w-4 mr-3'/> Aug - Dec 2023
            </div>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default index
