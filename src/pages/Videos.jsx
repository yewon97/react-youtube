import React, { useEffect, useState } from 'react';
import VideoCard from '../components/VideoCard';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

export default function Videos() {
  let { keyword } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [vidoes, setVidoes] = useState({});
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`/videos/search.json?q=${searchKeyword}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('data: ', data);
        setVidoes(data);
        setLoading(false);
      })
      .catch((e) => {
        setError('에러가 발생했음!');
      })
      .finally(() => setLoading(false));
    return () => {
      console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
    };
  }, [searchKeyword]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <>
      <Header />

      <section className='px-4 2xl:px-0'>
        <ul className="grid gap-4 xl:grid-cols-5 md:grid-cols-3 grid-cols-1">
          {vidoes.items &&
            vidoes.items.map((v) => {
              return (
                <li key={v.id.videoId}>
                  <VideoCard video={v} />
                </li>
              );
            })}
        </ul>
      </section>
    </>
  );
}
