import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Low Agreeable Rat</title>
        <meta property="og:title" content="Low Agreeable Rat" />
      </Helmet>
    </div>
  )
}

export default Home
