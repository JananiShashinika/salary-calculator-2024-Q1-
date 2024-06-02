import React, { useState } from 'react';
import './Main.css';
import CalculateForm from './CalculateForm';
import PaySheet from './PaySheet';

export default function Main() {
  const [results, setResults] = useState(null);

  return (
    <div>
      <div className='main'>
        <div className="container1">
          <div className='h4 title'>Calculate Your Salary</div>
          <img type='button' src='Pages/Images/_Link.png' className='linkImage' />
          <CalculateForm setResults={setResults} />
        </div>

        <div className='container2'>
          <PaySheet results={results} />
        </div>
      </div>
    </div>
  );
}
