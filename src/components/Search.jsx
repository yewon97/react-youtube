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
      className="m-auto justify-center flex relative w-1/2 max-w-5xl"
    >
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="border rounded-full w-full h-10 pl-5 pr-12 text-black"
      />
      <button
        type="button"
        aria-label="검색하기"
        className="absolute top-1/2 transform -translate-y-1/2 right-0 h-10 w-12 flex justify-center items-center"
      >
        <ImSearch className="text-black" />
      </button>
    </form>
  );
}
