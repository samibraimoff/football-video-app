import React from 'react';
import './search.css';

const Search = () => {
  return (
    <div className='search'>
      <label>
        <input type='text' placeholder='Look for a team...' />
      </label>
    </div>
  );
};

export default Search;
