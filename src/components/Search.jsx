import React, { useEffect, useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { useNavigate, useParams } from 'react-router-dom';

export default function Search() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  const handleChange = (e) => setText(e.target.value);

  useEffect(() => setText(keyword || ''), [keyword]);

  return (
    <form
      onSubmit={handleSubmit}
      className="m-auto justify-center flex relative w-7/12 max-w-5xl"
    >
      <input
        type="text"
        value={text}
				placeholder='Search...'
        onChange={handleChange}
        className="border w-full h-10 px-5 text-black rounded-l-full outline-none"
      />
      <button
        type="button"
        aria-label="검색하기"
        className="h-10 w-12 flex justify-center items-center bg-zinc-600 rounded-e-full"
      >
        <ImSearch className="text-black" />
      </button>
    </form>
  );
}
