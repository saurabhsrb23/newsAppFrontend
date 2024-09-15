import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [q, setQ] = useState('');
  const [lang, setLang] = useState('en');
  const [country, setCountry] = useState('us');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ q, lang, country });
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <div className="form-group">
        <label htmlFor="searchQuery">Search:</label>
        <input
          id="searchQuery"
          type="text"
          placeholder="Search..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="languageSelect">Language:</label>
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
        <label htmlFor="countrySelect">Country:</label>
        <select
          id="countrySelect"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="us">USA</option>
          <option value="in">India</option>
        </select>
      </div>

      <button type="submit" className="search-button">Search</button>
    </form>
  );
}

export default SearchBar;
