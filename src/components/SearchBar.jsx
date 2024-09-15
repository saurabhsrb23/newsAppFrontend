import React, { useState, useEffect } from 'react';

function SearchBar({ onSearch }) {
  const [q, setQ] = useState('');
  const [lang, setLang] = useState('en');
  const [country, setCountry] = useState('us');
  const [searchMode, setSearchMode] = useState('manual'); // 'manual' or 'automatic'

  useEffect(() => {
    if (searchMode === 'automatic' && q) {
      onSearch({ q, lang, country });
    }
  }, [q, lang, country, searchMode, onSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchMode === 'manual') {
      onSearch({ q, lang, country });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
       <div className="form-group">
        <label>Search Mode</label>
        <div className='flex flex-row'>
          <input
            type="radio"
            id="manual"
            name="searchMode"
            value="manual"
            checked={searchMode === 'manual'}
            onChange={() => setSearchMode('manual')}
          />
          <label htmlFor="manual">Manual</label>
          <input
            type="radio"
            id="automatic"
            name="searchMode"
            value="automatic"
            checked={searchMode === 'automatic'}
            onChange={() => setSearchMode('automatic')}
          />
          <label htmlFor="automatic">Automatic</label>
        </div>
 
      </div>
      <div className="form-group">
        <label htmlFor="searchQuery">Search</label>
        <input
          id="searchQuery"
          type="text"
          placeholder="Search..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="languageSelect">Language</label>
        <select
          id="languageSelect"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="countrySelect">Country</label>
        <select
          id="countrySelect"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="us">USA</option>
          <option value="in">India</option>
        </select>
      </div>

      {searchMode === 'manual' && (
    <div className="form-group">
        <label htmlFor="search">
            Click the button below to initiate a manual search.
        </label>
        <button type="submit" className="search-button">Search</button>
    </div>
)}
    </form>
  );
}

export default SearchBar;
