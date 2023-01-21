import React, { useState } from 'react';

type AccordionType = {
  title: string;
  content: string;
};

const accordion: AccordionType[] = [
  {
    title: 'Accordion1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iste iure inventore, magnam maiores deserunt! Iusto est amet optio error animi, aspernatur aliquid tempore recusandae. Eligendi, assumenda harum! Ducimus, dolor?',
  },
  {
    title: 'Accordion2',
    content:
      'consectetur adipisicing elit. Incidunt iste iure inventore, magnam maiores deserunt! Iusto est amet optio error animi, aspernatur aliquid tempore recusandae. Eligendi, assumenda harum! Ducimus, dolor?',
  },
  {
    title: 'Accordion3',
    content:
      'Lorem ipsum dolor sit amet consecteturiste iure inventore, magnam maiores deserunt! Iusto est amet optio error animi, aspernatur aliquid tempore recusandae. Eligendi, assumenda harum! Ducimus, dolor?',
  },
  {
    title: 'Accordion4',
    content:
      'ste iure inventore, magnam maiores deserunt! Iusto est amet optio error animi, aspernatur aliquid tempore recusandae. Eligendi, assumenda harum! Ducimus, dolor?',
  },
];

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
    <div className="w-96 bg-gray-100 rounded border border-gray-300 inline-block">
      {accordion.map((item, index) => {
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
