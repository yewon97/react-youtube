import React, { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';

export default function Search() {
  const [input, setInput] = useState('');
	const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${input}`);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className='m-auto justify-center flex relative w-1/2 max-w-5xl'>
      <input type="text" value={input} onChange={handleChange} className='border rounded-full w-full h-10 pl-5 pr-12 text-black' />
      <button type="button" aria-label="검색하기" className='absolute top-1/2 transform -translate-y-1/2 right-0 h-10 w-12 flex justify-center items-center'>
        <ImSearch className="text-black" />
      </button>
    </form>
  );
}
