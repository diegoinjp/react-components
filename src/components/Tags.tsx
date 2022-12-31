import React from 'react';
import { tagsColor } from '../utils/consts';

export type TagsProps = {
  tags?: string[];
  url?: string;
};

const Tags = ({ tags = [], url = '/' }: TagsProps) => {
  const getRandom = () => Math.floor(Math.random() * 6) + 1;
  const tagColor = (tag: string) => {
    if (tag === 'english') return tagsColor[1];
    if (tag === 'spanish') return tagsColor[2];
    if (tag === 'japanese') return tagsColor[3];
    else return tagsColor[getRandom()];
  };

  return (
    <div className="flex gap-2">
      {tags.map((tag, index) => {
        return (
          <div
            key={index}
            // onClick={() => href={url}}
            className={`px-4 py-1 rounded-full text-sm ${tagColor(tag)}`}>
            {tag}
          </div>
        );
      })}
    </div>
  );
};

export default Tags;
