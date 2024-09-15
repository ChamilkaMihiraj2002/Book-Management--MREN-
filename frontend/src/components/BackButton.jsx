import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowBarLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
      <Link
        to={destination}
        className='bg-sky-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-sky-700'
      >
        <BsArrowBarLeft className='text-2xl' />
        <span className='text-lg'>Back</span>
      </Link>
    </div>
  );
};

export default BackButton;
