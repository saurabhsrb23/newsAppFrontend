// src/App.js
import React, { useState } from 'react';
import NewsFeed from './components/NewsFeed';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  const [searchParams, setSearchParams] = useState({
    q: 'news',
    lang: 'en',
    country: 'en',
    page: 1,
  });

  const handleSearch = (params) => {
    setSearchParams({ ...searchParams, ...params, page: 1 });
  };

  const handlePageChange = (page) => {
    setSearchParams({ ...searchParams, page });
  };

  return (
    <div className="App">
    <h1 class="text-4xl font-bold text-gray-900 my-4">News Application</h1>
      <SearchBar onSearch={handleSearch} />
      <NewsFeed searchParams={searchParams} />
      <Pagination currentPage={searchParams.page} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
