import React from 'react';
import { Link } from 'react-router-dom';
import campusHome from './assets/home.jpeg'; // Replace with your image

const Home = () => {
  return (
    <div>
      <img src={campusHome} alt="Murray State University Campus" />
      <Link to="/page1">
        <button>Go to Page 1</button>
      </Link>
    </div>
  );
};

export default Home;

