import React from 'react'

export default function Header() {
  return (
    <div className='max-w-7xl mx-auto flex justify-between items-center bg-slate-400'>
      <div>
        <h1>Check out this cool logo</h1>
      </div>
      <div className='flex justify-between items-center gap-4'>
        <a href='/login'>Sign In</a>
        <a href='/register'>Sign up</a>
      </div>
    </div>
  )
}
