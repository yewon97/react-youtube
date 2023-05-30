import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function VideoCard({ video, classNm }) {
  return (
		<Link to={`/videos/watch/${video.id.videoId}`} relative="path" className={classNm}>
			<div className="aspect-video">
				<img
					src={video.snippet.thumbnails.high.url}
					alt=""
					className="w-full object-cover rounded-xl"
				/>
			</div>
			<div className='pl-px pr-4'>
				<h2 className="text-base/[20px] line-clamp-2 mt-4">
					{video.snippet.title}
				</h2>
				<p className="mt-2 text-xs text-stone-400">
					{video.snippet.channelTitle}
				</p>
				<p className="mt-1 text-xs text-stone-400">
					{video.snippet.publishedAt}
				</p>
			</div>
		</Link>
  );
}
