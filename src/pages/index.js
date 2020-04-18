import { useEffect, useState } from 'react'
import fetch from 'node-fetch'
import { toast } from 'react-toastify'

import Unsplash from 'unsplash-js'
import Layout from '@components/layout'
global.fetch = fetch

const unsplash = new Unsplash({
  accessKey: process.env.UNSPLASH_CLIENT_ID,
  // Optionally you can also configure a custom header to be sent with every request
  headers: {
    'X-Custom-Header': 'dashy.page'
  },
  timeout: 5000 // values set in ms
})

const Home = () => {
  const [data, setData] = useState()
  const [hasError, setError] = useState(false)
  const [ImageUrl, setImageUrl] = useState('/img.jpg')

  async function fetchData () {
    const res = await unsplash.photos.getRandomPhoto({
      collections: [443027]
    })
    res
      .json()
      .then(res => setData(res))
      .catch(err => setError(err))
  }


/*   useEffect(() => {
    fetchData()
  }, []) */

  return (
    <Layout>
      {/* <img className="bg-cover bg-center" src={ImageUrl}></img> */}
      <span>Data</span>
      <p>
      {JSON.stringify(data)}
      </p>
    </Layout>
  )
}

export async function getServerSideProps (context) {
  return {
    props: {} // will be passed to the page component as props
  }
}

export default Home
