import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="border-b-2 border-gray-200 py-2 px-4 text-black">No</th>
            <th className="border-b-2 border-gray-200 py-2 px-4 text-black">Title</th>
            <th className="border-b-2 border-gray-200 py-2 px-4 text-black max-md:hidden">
              Author
            </th>
            <th className="border-b-2 border-gray-200 py-2 px-4 text-black max-md:hidden">
              Publish Year
            </th>
            <th className="border-b-2 border-gray-200 py-2 px-4 text-black">Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className="hover:bg-gray-100 transition-colors">
              <td className="border-b border-gray-200 text-center py-2 px-4 text-black">
                {index + 1}
              </td>
              <td className="border-b border-gray-200 text-center py-2 px-4 text-black">
                {book.title}
              </td>
              <td className="border-b border-gray-200 text-center py-2 px-4 text-black max-md:hidden">
                {book.author}
              </td>
              <td className="border-b border-gray-200 text-center py-2 px-4 text-black max-md:hidden">
                {book.publishYear}
              </td>
              <td className="border-b border-gray-200 text-center py-2 px-4">
                <div className="flex justify-center gap-x-4">
                  <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className="text-2xl text-green-600 hover:text-green-800 transition-colors" />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-500 hover:text-yellow-700 transition-colors" />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-500 hover:text-red-700 transition-colors" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
