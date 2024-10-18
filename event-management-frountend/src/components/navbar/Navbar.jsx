import React from 'react'

function Navbar() {
  let user
  return (
    <div
    className='flex items-center columns-3'>
      <div
      className='w-1/3'>
        <h1 className='m-4 pr-4 font-bold border-r-2 border-gray-600 inline'>Event Management Application</h1>
      </div>
      <div className='w-full'>

      </div>
      <div
      className='w-full flex'>
        <ul className='flex items-center'>
          <li className='m-3 '>
            <button className='rounded border-orange-300 border-2 p-2'>Home</button>
          </li>
          <li className='m-3'>
          <button className='rounded border-orange-300 border-2 p-2'>All-Event</button>
          </li>
          <li className='m-3'>
          <button className='rounded border-orange-300 border-2 p-2'>About</button> 
          </li>
        </ul>
        {(!user) ?(
          <ul className='flex items-center'>
          <li className='m-3'>
          <button className='rounded border-orange-300 border-2 p-2'>Login</button>
          </li>
          <li className='m-3'>
          <button className='rounded border-orange-300 border-2 p-2'>Register</button>
          </li>
          </ul>
        ) : <ul className='flex items-center'>
        <li className='m-3'>
        <button className='rounded border-orange-300 border-2 p-2'>Login</button>
        </li>
        <li className='m-3'>
        <button className='rounded border-orange-300 border-2 p-2'>Register</button>
        </li>
        </ul>}
      </div>
    </div>
  )
}

export default Navbar