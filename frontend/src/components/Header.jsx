import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='max-w-7xl mx-auto flex justify-between items-center bg-slate-400'>
      <div>
        <h1>Check out this cool logo</h1>
      </div>
      <div className='flex justify-between items-center gap-4'>
        <Link to='/login'>Sign In</Link>
        <Link to='/register'>Sign up</Link>
      </div>
    </div>
  )
}
