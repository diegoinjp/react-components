import React from 'react';
import { PLACEHOLDERTEXT } from '../utils/consts';
import { PostProps } from '../utils/types';
import Tags from './Tags';

const Card = ({
  children = PLACEHOLDERTEXT,
  p = 2,
  title,
  badge = '',
  imgUrl,
  tags = [],
}: PostProps) => {
  const contentClass = `${title ? 'h-48' : 'h-56'} overflow-y-scroll`;

  return (
    <div className="h-[30rem] relative transition group hover:-translate-y-0.5 hover:bg-gray-100 auto-cols-min drop-shadow-sm bg-gray-50 overflow-hidden rounded-md">
      {imgUrl && (
        <img
          className="w-full h-48 object-cover opacity-60 group-hover:opacity-100"
          src={imgUrl}
        />
      )}
      <div style={{ padding: `${p}rem` }} className="flex flex-col gap-3">
        {title && (
          <div className="uppercase font-semibold text-xl">{title}</div>
        )}
        {badge && (
          <div className="py-1 px-2 absolute top-0 right-0 rounded-bl-md bg-gray-200 text-sm transition group-hover:bg-red-500 group-hover:text-white">
            {badge}
          </div>
        )}
        <div className={contentClass}>{children}</div>
        {tags.length > 0 && <Tags tags={tags} />}
      </div>
    </div>
  );
};

export default Card;
