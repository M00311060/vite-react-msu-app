import React from 'react';
import { Link } from 'react-router-dom';
import campus1 from './assets/page1.jpg'; // Replace with your image

const Page1 = () => {
  return (
    <div>
      <img src={campus1} alt="Murray State University Campus" />
      <Link to="/page2">
        <button>Go to Page 2</button>
      </Link>
    </div>
  );
};

export default Page1;


