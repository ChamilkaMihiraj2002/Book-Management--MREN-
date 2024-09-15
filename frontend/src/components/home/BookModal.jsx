import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 inset-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-auto bg-white rounded-xl p-6 flex flex-col relative shadow-lg"
      >
        {/* Close Button */}
        <AiOutlineClose
          className="absolute right-4 top-4 text-3xl text-gray-700 cursor-pointer hover:text-red-600 transition-colors"
          onClick={onClose}
        />

        {/* Publish Year */}
        <h2 className="w-fit px-4 py-1 bg-blue-200 text-blue-800 rounded-lg text-sm font-semibold mb-4">
          {book.publishYear}
        </h2>

        {/* Book ID */}
        <h4 className="text-gray-400 text-xs mb-2">{book._id}</h4>

        {/* Book Title */}
        <div className="flex items-center gap-x-2 mb-3">
          <PiBookOpenTextLight className="text-blue-500 text-3xl" />
          <h2 className="text-lg font-bold text-gray-700">{book.title}</h2>
        </div>

        {/* Author */}
        <div className="flex items-center gap-x-2 mb-4">
          <BiUserCircle className="text-blue-500 text-3xl" />
          <h2 className="text-md text-gray-600">{book.author}</h2>
        </div>

        {/* Modal Content */}
        <div className="mt-4">
          <p className="text-gray-600 mb-2 font-semibold">Description</p>
          <p className="text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quia
            voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
            necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
            nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
            dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
            vitae voluptate sequi repellat!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
