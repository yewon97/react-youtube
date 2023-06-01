import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko'

register('ko', koLocale);

export default function VideoCard({ video, classNm }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  return (
    <li>
      <Link
        to={`/videos/watch/${video.id.videoId}`}
        relative="path"
        className={classNm}
      >
        <img
          src={thumbnails.medium.url}
          alt={title}
          className="w-full object-cover rounded-xl"
        />

        <div className="pl-px pr-4">
          <h2 className="text-base/[20px] line-clamp-2 mt-4">{title}</h2>
          <p className="mt-2 text-xs text-stone-400">{channelTitle}</p>
          <p className="mt-1 text-xs text-stone-400">
            {format(publishedAt, 'ko')}
          </p>
        </div>
      </Link>
    </li>
  );
}
