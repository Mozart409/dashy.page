import React, {useState} from 'react'
import moment from 'moment'
import useInterval from '@hooks/useInterval'

export default function date () {
  
  let [date, setDate] = useState()
  let [time, setTime] = useState()

  useInterval(() => {
    // Your custom logic here
    setDate(moment().format('D.MMMM.YYYY'))
    setTime(moment().format('HH:mm:ss'))
  }, 1000)

  return (
    <div>
      <div className='bg-transparent p-2'>
        <div className='relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto'>
            <div className='rounded-lg'>
              <div className='flex flex-col p-6 text-center '>
                <span className='order-2 mt-2 text-lg leading-6 font-medium text-gray-700'>
                  {date}
                </span>
                <span className='order-1 text-3xl leading-none font-extrabold text-indigo-600 mx-auto'>
                  {time}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
