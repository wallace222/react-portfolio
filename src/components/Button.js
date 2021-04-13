import React from 'react';
import '../style/Button.css';
import { Link } from 'react-router-dom';

function Button() {
  return (
    <Link to='sign-up'>
      <button className='btn'>Sign Up</button>
    </Link>
  );
}

export default Button