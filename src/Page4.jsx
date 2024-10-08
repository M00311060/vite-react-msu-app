import React from 'react';
import { Link } from 'react-router-dom';
import campus4 from './assets/page4.jpeg'; // Replace with your image

const Page4 = () => {
  return (
    <div>
      <img src={campus4} alt="Murray State University Campus" />
      <Link to="/">
        <button>Go to Home</button>
      </Link>
    </div>
  );
};

export default Page4;
