import React from 'react';
import { Link } from 'react-router-dom';
import { formatAgo } from '../util/date';

export default function VideoCard({ video, type }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
	const isList = type === 'list';
  return (
    <li>
      <Link
				className={isList ? 'flex gap-1 m-2' : ''}
        to={`/videos/watch/${video.id}`}
				state={{ video }} 
      >
        <img
          className={`${isList ? 'w-60' : 'w-full'} object-cover rounded-xl`}
          src={thumbnails.medium.url}
          alt={title}
        />
        <div className={isList ? 'ml-4' : 'pl-px pr-4'}>
          <h2 className="text-base/[20px] line-clamp-2 mt-4">{title}</h2>
          <p className="mt-2 text-sm opacity-80">{channelTitle}</p>
          <p className="mt-1 text-sm opacity-80">
            {formatAgo(publishedAt, 'ko')}
          </p>
        </div>
      </Link>
    </li>
  );
}
