import React from 'react';
import './index.css';

const Navbar = ({ setBackground }) => {
  return (
    <div className='navbar'>
      <span>Photo Editor</span>
      <input
        type='input'
        placeholder='Paste the image link'
        onChange={(e) => setBackground(e.target.value)}
      />
    </div>
  );
};

export default Navbar;
