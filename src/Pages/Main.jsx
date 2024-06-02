import React from 'react';

import './Main.css';
import CalculateForm from './CalculateForm';
import PaySheet from './PaySheet';


export default function Main() {
    return (
      <div>
        <div className='main'>
        <div className="container1">
          <div className='h4 title'>Calculate Your Salary</div>
          <img type='button' src='Pages/Images/_Link.png' className='linkImage' />
          <CalculateForm />
        </div>

        <div className='container2'>
          <PaySheet/>
        </div>

        </div>
        </div>
    );
  }