import { useEffect, useState } from 'react'
import Layout from '@components/Layout'
import Unsplash from 'unsplash-js'
const unsplash = new Unsplash({
  accessKey: process.env.UNSPLASH_CLIENT_ID,
  // Optionally you can also configure a custom header to be sent with every request
  headers: {
    'X-Custom-Header': 'dashy.page'
  },
  // Optionally if using a node-fetch polyfill or a version of fetch which supports the timeout option, you can configure the request timeout for all requests
  timeout: 500 // values set in ms
})

const Home = () => {
  const [ImageUrl, setImageUrl] = useState()
  useEffect(() => {
    unsplash.photos.getRandomPhoto({ username: 'naoufal' }).then(json => {
      setImageUrl(json.url)
    })
  }, [unsplash])

  return (
    <Layout>
      <img src={ImageUrl}></img>
      <span>Key {process.env.UNSPLASH_CLIENT_ID}</span>
    </Layout>
  )
}

export async function getServerSideProps (context) {
  return {
    props: {
      /* image: unsplash.photos.getRandomPhoto({ username: "naoufal" })
  .then(json => {
    console.log(json)
    
  }) */
    } // will be passed to the page component as props
  }
}

export default Home
