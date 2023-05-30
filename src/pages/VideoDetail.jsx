import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import Header from '../components/Header';

export default function VideoDetail() {
  const { videoId } = useParams();
  const [vidoes, setVidoes] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [video, setVideo] = useState();
	const [mainVideo, setMainVideo] = useState({});
	console.log('mainVideo: ', mainVideo);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`/videos/related.json`)
      .then((res) => res.json())
      .then((data) => {
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
  }, []);
  
	useEffect(() => {
    fetch(`/videos/channel.json`)
      .then((res) => res.json())
      .then((data) => {
        setMainVideo(data);
      })
      .catch((e) => {
        setError('에러가 발생했음!');
      })
    return () => {
      console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
    };
  }, []);

  return (
		<>
			<Header />
	
	    <div className='flex justify-between'>
				{mainVideo.items && <VideoCard video={mainVideo.items} classNm="" />}
	      <ul  className="grid gap-4 grid-cols-1 max-w-md">
	        {vidoes.items &&
	          vidoes.items.map((v) => {
	            return (
	              <li key={v.id.videoId}>
	                <VideoCard video={v} classNm="flex" />
	              </li>
	            );
	          })}
	      </ul>
	    </div>
		</>
  );
}
