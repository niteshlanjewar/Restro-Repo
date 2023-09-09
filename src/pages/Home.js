import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from "react-router-dom";
import banner from "../images/banner.jpg";
import "../styles/HomeStyle.css";

const Home = () => {
  return (
    <Layout>
     <div className='home' style={{backgroundImage: `url(${banner})`}}>
      <div className='headerContainer'>
      <h1>Foodie food</h1>
      <p>aja khna khane bro</p>
      <Link to={"/menu"}>
      <button>
        Order me 🍔
        </button>
      </Link>
    
      </div>
     </div>
    </Layout>
  )
}

export default Home
