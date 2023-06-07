import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatAgo } from '../util/date';

export default function VideoCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  return (
    <li>
      <Link
        to={`/videos/watch/${video.id}`}
				state={{ video }} 
      >
        <img
          className="w-full object-cover rounded-xl"
          src={thumbnails.medium.url}
          alt={title}
        />
        <div className="pl-px pr-4">
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
