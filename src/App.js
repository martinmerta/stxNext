import React, { useState } from 'react';
import FetchBooks from './components/FetchBooks';
import './App.css';
function App() {
  const [searchBy, setSearchValue] = useState('intitle');
  const [inputValue, setInputValue] = useState('');
  return (
    <div className='App'>
      <h1 className='helloTitle'>
        Hello, welcome to the best book searching site ever!
      </h1>
      <form className='form'>
        <label>
          Type what you want to search:
          <input
            type='text'
            name='inputValue'
            value={inputValue}
            onChange={e => {
              const text = e.currentTarget.value;
              setInputValue(text);
            }}
          />
        </label>
        <label>
          Search by:
          <select
            value={searchBy}
            onChange={e => {
              const value = e.currentTarget.value;
              setSearchValue(value);
              setInputValue('');
            }}
          >
            <option value='intitle'>title</option>
            <option value='inauthor'>author</option>
            <option value='inpublisher'>publisher</option>
            <option value='isbn'>ISBN number</option>
          </select>
        </label>
      </form>
      {inputValue !== '' ? (
        <FetchBooks searchBy={searchBy} inputValue={inputValue} />
      ) : null}
    </div>
  );
}

export default App;
