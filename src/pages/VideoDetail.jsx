import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';

export default function VideoDetail() {
  const { videoId } = useParams();
  const [vidoes, setVidoes] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
	const [video, setVideo] = useState();

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

  return (
    <div>
      VideoDetail : {videoId}

			<div>
				{/* <VideoCard video={video} /> */}
			</div>

      {vidoes.items &&
        vidoes.items.map((v) => {
          return (
            <div key={v.id.videoId}>
              <VideoCard video={v} />
            </div>
          );
        })}
    </div>
  );
}
