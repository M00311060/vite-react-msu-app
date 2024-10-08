import React from 'react';
import { Link } from 'react-router-dom';
import campus2 from './assets/page2.jpg'; // Replace with your image

const Page2 = () => {
  return (
    <div>
      <img src={campus2} alt="Murray State University Campus" />
      <Link to="/page3">
        <button>Go to Page 3</button>
      </Link>
    </div>
  );
};

export default Page2;

