import React, { useEffect, useState } from 'react';
import { PostProps } from '../utils/types';

export type CarouselProps = {
  /** Content of the carousel */
  posts: PostProps[];
  /** Height of the carousel */
  height?: number;
  /** Duration in seconds of the loop */
  duration?: number;
  /** Auto play of the slider */
  // autoPlay?: boolean; TODO: add autoPlay
  /** Select how many slides will display */
  slideNumber?: number;
};

// TODO: onMouseEnter and onMouseLeave should stop the carousel
// TODO: create arrows

const Carousel = ({
  posts,
  height = 20,
  duration = 7,
  slideNumber = 3,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const infiniteScroll = () => {
    if (currentIndex === slideNumber - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      infiniteScroll();
    }, duration * 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="flex flex-nowrap overflow-hidden group">
      {posts.map((post, index) => {
        return (
          <div
            style={{
              transform: `translate(-${currentIndex * 100}%)`,
              height: `${height}rem`,
            }}
            className="min-w-full relative transition duration-300 justify-center items-center"
            key={index}>
            <div className="py-2 px-4 rounded-tr-lg bg-gray-300 text-lg uppercase font-semibold absolute bottom-0 left-0 group-hover:bg-yellow-300">
              {post.title}
            </div>
            <img
              src={post.imgUrl}
              alt={post.title}
              style={{ height: `${height}rem` }}
              className="w-full object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
