import React, { useEffect, useState } from 'react';
import { PostProps } from '../utils/types';

export type CarouselProps = {
  /** Content of the carousel */
  posts: PostProps[];
  /** Height of the carousel, default height is 20rem */
  height?: number;
  /** Duration in seconds of the loop, default duration is 7 seconds */
  duration?: number;
  /** Auto play of the slider, the carousel with autoplay by default */
  autoPlay?: boolean; //TODO: add autoPlay
  /** Select how many slides will display, default number is 5 */
  slideNumber?: number;
  /** Select if bullets will display, default number is true */
  bullets?: boolean;
};

// TODO: onMouseEnter and onMouseLeave should stop the carousel
// TODO: create arrows

const Carousel = ({
  posts,
  height = 20,
  duration = 7,
  autoPlay = true,
  slideNumber = 5,
}: // bullets = true,
CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const infiniteScroll = () => {
    if (currentIndex === slideNumber - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentIndex(prev => (prev - 1 + slideNumber) % slideNumber);
  };
  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % slideNumber);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      infiniteScroll();
    }, duration * 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="flex flex-nowrap overflow-hidden group relative">
      <span
        onClick={handlePrevious}
        className="w-10 h-10 absolute rounded-full bg-red-600/90 grid place-items-center top-1/2 left-3 transform -translate-y-1/2 z-10 cursor-pointer">
        ◀
      </span>
      <span
        onClick={handleNext}
        className="w-10 h-10 absolute rounded-full bg-red-600/90 grid place-items-center right-3 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
        ▶
      </span>
      {/* <span className="w-3 h-3 absolute rounded-full bg-black/90 grid place-items-center right-1/2 top-3 transform -translate--1/2 z-10 cursor-pointer"></span> */}
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
