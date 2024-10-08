import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import campusImage from './assets/page3.jpeg'; // Replace with your MSU campus image for Page 3

const Page3 = () => {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState('');
  const [isValid, setIsValid] = useState(true);

  // Function to handle form submission and answer validation
  const handleSubmit = () => {
    if (answer.toLowerCase() === 'kentucky') {
      navigate('/page4'); // Navigate to Page 4 if the answer is correct
    } else {
      setIsValid(false); // Show error message if the answer is incorrect
    }
  };

  return (
    <div>
      <h1>Welcome to Page 3</h1>
      <img src={campusImage} alt="Murray State University Campus" />

      <div style={{ marginTop: '20px' }}>
        <p>What is the state of Murray State University located in?</p>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)} // Update state with the user's input
          style={{ padding: '10px', fontSize: '16px', width: '300px' }}
        />
        {!isValid && <p style={{ color: 'red' }}>Incorrect answer, please try again.</p>}

        <div style={{ marginTop: '10px' }}>
          <button onClick={handleSubmit} style={{ padding: '10px 20px', fontSize: '16px' }}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page3;

