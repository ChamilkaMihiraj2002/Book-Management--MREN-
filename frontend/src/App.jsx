import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout'; // Import the layout component
import Home from './pages/Home';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import CreateBook from './pages/CreateBook';
import DeleteBook from './pages/DeleteBook';

const App = () => {
  return (
    <Routes>
      {/* Layout Route */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="books/create" element={<CreateBook />} />
        <Route path="books/details/:id" element={<ShowBook />} />
        <Route path="books/edit/:id" element={<EditBook />} />
        <Route path="books/delete/:id" element={<DeleteBook />} />
      </Route>
    </Routes>
  );
};

export default App;
