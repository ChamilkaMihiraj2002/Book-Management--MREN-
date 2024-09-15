import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to load book details');
        setLoading(false);
        console.error(error);
      });
  }, [id]);

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Book</h1>
      {loading && (
        <div className='flex justify-center items-center mb-4'>
          <Spinner />
        </div>
      )}
      {error && <div className='text-red-600 my-4'>{error}</div>}
      {!loading && !error && (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-full max-w-lg p-6 mx-auto'>
          <div className='my-4'>
            <span className='text-xl font-semibold text-gray-700'>Id:</span>
            <span className='ml-2 text-white'>{book._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl font-semibold text-gray-700'>Title:</span>
            <span className='ml-2 text-white'>{book.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl font-semibold text-gray-700'>Author:</span>
            <span className='ml-2 text-white'>{book.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl font-semibold text-gray-700'>Publish Year:</span>
            <span className='ml-2 text-white'>{book.publishYear}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl font-semibold text-gray-700'>Create Time:</span>
            <span className='ml-2 text-white'>{new Date(book.createdAt).toLocaleString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl font-semibold text-gray-700'>Last Update Time:</span>
            <span className='ml-2 text-white'>{new Date(book.updatedAt).toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
