import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col p-2 m-3 shadow-lg'>
        <div className='flex col-span-1 mx-2'>
            <img 
            className='h-12 hover:bg-black-400 ml-3 mr-5'
            src="https://cdn2.iconfinder.com/data/icons/most-useful-icons-4/50/HAMBURGER_MENU-512.png" 
            alt="Hamburger" />

            <img 
            className='h-12'
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg" 
            alt="youtube-logo" />
        </div>

        <div className='col-span-10 px-10'>
          <input type="text" className='w-1/2 border border-gray-400 p-2 rounded-l-full' />
            <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>
              🔍
            </button>
        </div>

        <div className='col-span-1'>
            <img 
            className='h-9'
            src="http://pluspng.com/img-png/png-user-icon-circled-user-icon-2240.png" 
            alt="user-icon" />
        </div>
    </div>
  )
}

export default Head;