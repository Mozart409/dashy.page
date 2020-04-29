import React from 'react'

export default function sidebar () {
  return (
    <div className='h-96 flex overflow-hidden bg-gray-100'>
      <div className='flex flex-shrink-0'>
        <div className='flex flex-col w-64'>
          <div className='h-0 flex-1 flex flex-col overflow-y-auto'>
            <nav className='flex-1 px-2 py-4 bg-gray-800'>
              <a
                href='#'
                className='group flex items-center px-2 py-2 text-sm leading-5 font-medium text-white rounded-md bg-gray-900 focus:outline-none focus:bg-gray-700 transition ease-in-out duration-150'
              >
                <svg
                  className='mr-3 h-6 w-6 text-gray-300 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6'
                  />
                </svg>
                Dashboard
              </a>
              <a
                href='#'
                className='mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150'
              >
                <svg
                  className='mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
                Team
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
