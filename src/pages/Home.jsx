import React from 'react'
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';
import Natanael from '../Images/natanael.jpg';
import '../styles/HomeStyles.css';

const Home = () => {
  return (
    <Layout>
     <div className='home' style={{backgroundImage:`url(${Natanael})`}}>
        <div className="headerContainer">
          <h1>Hospital Website</h1>
          <p>Best Hospital in Nigeria</p>
          <Link to='/menu'>
          <button>Book Now</button>
          </Link>
        </div>
     </div>
    </Layout>
  )
}

export default Home
