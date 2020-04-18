import {useState} from 'react'
import Head from 'next/head'
import { ToastContainer, toast } from 'react-toastify'

import Header from './header'


toast.configure({
  autoClose: 4000,
  draggable: false
})

function Layout (props) {
  
  const [ImageUrl, setImageUrl] = useState('/img.jpg')
  return (
    <div className='flex flex-col min-h-screen bg-cover bg-center' style={{backgroundImage: `url(${ImageUrl})`}}>
      <ToastContainer />
      <Head>
        <link
          rel='shortcut icon'
          type='image/x-icon'
          href='/tailwind-logo.svg'
        />
      </Head>
      <Header />
      <main className='flex-1 w-full max-w-4xl p-4 mx-auto md:px-8 md:py-16'>
        {props.children}
      </main>
      
    </div>
  )
}

export default Layout
