import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg shadow-md p-4 m-4 relative hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-white">
      {/* Publish Year */}
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-blue-200 text-blue-800 rounded-lg text-sm font-semibold shadow">
        {book.publishYear}
      </h2>

      {/* Book ID */}
      <h4 className="my-2 text-gray-400 text-xs">{book._id}</h4>

      {/* Book Title */}
      <div className="flex items-center gap-x-2 mb-2">
        <PiBookOpenTextLight className="text-blue-500 text-3xl" />
        <h2 className="text-lg font-bold text-gray-700">{book.title}</h2>
      </div>

      {/* Author */}
      <div className="flex items-center gap-x-2">
        <BiUserCircle className="text-blue-500 text-3xl" />
        <h2 className="text-md text-gray-600">{book.author}</h2>
      </div>

      {/* Action Icons */}
      <div className="flex justify-around items-center mt-4 pt-4 border-t border-gray-200">
        {/* Show Modal Icon */}
        <BiShow
          className="text-3xl text-blue-700 hover:text-blue-900 cursor-pointer transition-colors duration-200"
          onClick={() => setShowModal(true)}
        />
        {/* Details Icon */}
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-green-600 hover:text-green-800 transition-colors duration-200" />
        </Link>
        {/* Edit Icon */}
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-500 hover:text-yellow-700 transition-colors duration-200" />
        </Link>
        {/* Delete Icon */}
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-red-800 transition-colors duration-200" />
        </Link>
      </div>

      {/* Modal */}
      {showModal && <BookModal book={book} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default BookSingleCard;
