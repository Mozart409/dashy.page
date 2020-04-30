import React, { useState } from 'react'
import useSWR from 'swr'
import fetch from 'isomorphic-unfetch'
import useInterval from '@hooks/useInterval'
import { GiSunrise, GiSunset } from 'react-icons/gi'
import { WiDaySunny, WiDayCloudy, WiRain } from 'react-icons/wi'

function fetcher (...args) {
  return fetch(...args).then(response => response.json())
}

export default function weather (props) {
  const initialData = props.data
  const [Temp, setTemp] = useState()
  const weatherkey = process.env.OPENWEATHER_KEY
  const queryurl = `http://api.openweathermap.org/data/2.5/weather?id=2867714&appid=${weatherkey}&lang=de&units=metric`
  const { data } = useSWR(queryurl, fetcher, { initialData })
  useInterval(() => {
    // Your custom logic here

    setTemp()
  }, 3600)

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
      {console.log(data)}
      <span className='text-white text-base'>{data.main.name}</span>
      <span className='text-white text-base'>{data.main.temp_max}</span>
      <span className='text-white text-base'>{data.main.temp}</span>
      <span className='text-white text-base'>{data.main.temp_min}</span>
      <span className='text-white text-base'>{data.main.pressure}</span>
    </div>
  )
}

export async function getStaticProps () {
  const data = await fetcher(queryurl)

  return { props: data }
}
