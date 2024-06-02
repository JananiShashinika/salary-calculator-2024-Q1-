import React, { useState } from 'react';
import './Main.css';
import CalculateForm from './CalculateForm';
import PaySheet from './PaySheet';

export default function Main() {
  // Define results state and a function to update it
  const [results, setResults] = useState(null);

  return (
    <div>
      <div className='main'>
        <div className="container1">

        
          <div className='h4 title'>Calculate Your Salary</div>
          <img type='reset' src='Pages/Images/_Link.png' className='linkImage' />
          {/* Pass results state and setResults function as props to CalculateForm */}
          <CalculateForm setResults={setResults} />
        </div>

        <div className='container2'>
          {/* Pass results state to PaySheet */}
          <PaySheet results={results} />
        </div>
      </div>
    </div>
  );
}
