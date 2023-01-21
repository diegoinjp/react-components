import React, { useState } from 'react';
import { faqItems } from '../api/faq';

function Accordion() {
  const [activeIdx, setActiveIdx] = useState<number>(-1);

  const handleIndex = (index: number) => {
    if (activeIdx === index) {
      setActiveIdx(-1);
    } else {
      setActiveIdx(index);
    }
  };

  return (
    <div className=" w-full md:w-[30rem] bg-gray-100 rounded border border-gray-300 inline-block">
      {faqItems.map((item, index) => {
        return (
          <>
            <div
              key={index}
              className="p-3  cursor-pointer"
              onClick={() => handleIndex(index)}>
              <p>{item.title}</p>
            </div>
            <div
              className={`p-2 bg-gray-50 border-y border-gray-300 transition-all transform ${
                activeIdx === index ? 'h-max ' : 'h-0 hidden'
              }`}>
              {item.content}
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Accordion;
