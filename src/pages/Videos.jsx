import React, { useEffect, useState } from 'react';
import VideoCard from '../components/VideoCard';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], async () => {
    return axios
      .get(`/videos/${keyword ? 'search' : 'popular'}.json`)
      .then((res) => res.data.items);
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong!!</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
