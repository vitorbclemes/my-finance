import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex flex-col justify-between border-r border-light-gray items-center p-4 w-24 h-screen'>
        <i className='material-symbols-outlined icon'>account_circle</i>
        <div className='flex flex-col items-center grow justify-center gap-4'>
            <i className='material-symbols-outlined icon'>bar_chart</i>
            <i className='material-symbols-outlined icon'>sports_score</i>
            <i className='material-symbols-outlined icon'>chess</i>
        </div>
    </nav>
  )
}

export default Navbar;