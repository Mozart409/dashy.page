import { useState } from 'react'
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
    <div
      className='flex flex-col max-h-screen bg-auto bg-center'
      style={{ backgroundImage: `url(${ImageUrl})` }}
    >
      <ToastContainer />
      <Head>
        <title>Dashy</title>
        <link rel='shortcut icon' type='image/x-icon' href='/logo.svg' />
      </Head>
      <Header />
      <main className='flex-1 w-full max-w-7xl mx-auto sm:px-6 lg:px-8 min-h-full max-h-full'>
        {props.children}
      </main>
    </div>
  )
}

export default Layout
