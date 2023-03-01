import React from 'react'
import { FaGraduationCap } from "react-icons/fa";

const index = () => {
  return (
    <div className='flex justify-center'>
      <table>
        <tr>
          <td width={300} className='text-right'>
            <h3 className='font-semibold'>Arrisalah Boarding School</h3>
            <span className='text-gray-600'>Padang - Sumbar</span>
            <div className='flex justify-end text-gray-600'>
              <FaGraduationCap className='h-6 w-5 mr-3'/> 2016 - 2019
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
            <h3 className='font-semibold'>Universitas Pendidikan Indonesia</h3>
            <span className='text-gray-600'>Bandung - Jabar</span>
            <div className='flex text-gray-600'>
              <FaGraduationCap className='h-6 w-5 mr-3'/> 2019 - Now
            </div>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default index
