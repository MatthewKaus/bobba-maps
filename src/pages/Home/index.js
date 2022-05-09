import React from 'react'
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Post from '../../components/Post'

export const Home = () => {
  return (
    <div className='home'>
      <Nav />

      {/* Main Page Look Up */}
      <div>
        <div>
          <h1>Bobba Maps</h1>
        </div>
        <form>
          <input type='text' placeholder='Search' />
          <input type='submit' />
        </form>
      </div>

      {/* Local to your Area */}
      <div>
        <h1>Local in your Area</h1>
        {/* Recent Local Content */}
        <Post />
        <div>

        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h1>Recent Activity</h1>
        <div>
        </div>
      </div>

      {/* <Footer /> */}

    </div>
  )
}

export default Home;