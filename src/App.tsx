import React, { useState } from 'react';
import Modal from './components/Modal';
import Panel from './components/Panel';
import Tooltip from './components/Tooltip';
import { PlaceholderText } from './utils/consts';
import { ButtonType } from './utils/types';
import Card from './components/Card';
import { postsContent } from './api/posts';
import Carousel from './components/Carousel';
import Tags from './components/Tags';

function App() {
  const [count, setCount] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const open = () => setOpenModal(true);
  const open2 = () => setOpenModal2(true);
  const close = () => setOpenModal(false);
  const close2 = () => setOpenModal2(false);

  const buttons: ButtonType[] = [
    {
      label: '-',
      btnColor: 'primary',
      onClick: decrement,
    },
    {
      label: '+',
      btnColor: 'secondary',
      onClick: increment,
    },
  ];

  const buttons1: ButtonType[] = [
    ...buttons,
    {
      label: 'Modal1',
      btnColor: 'yellow',
      onClick: open,
    },
    {
      label: 'Modal2',
      btnColor: 'paper',
      onClick: open2,
    },
  ];

  const buttons2: ButtonType[] = [
    ...buttons,
    {
      label: 'OK',
      btnColor: 'yellow',
      onClick: close,
    },
  ];

  const buttons3: ButtonType[] = [
    {
      label: 'OK',
      btnColor: 'secondary',
      onClick: close2,
    },
  ];

  return (
    <main className="flex justify-center w-full">
      <div className="border w-11/12 lg:w-[60rem] p-5 flex flex-col gap-3">
        <Carousel posts={postsContent} duration={5} />
        <Panel title={`Total: ${count}`} buttons={buttons1}>
          <div className="flex flex-col gap-3">
            {PlaceholderText}
            <Tags tags={postsContent[1].tags} url={postsContent[1].imgUrl} />
          </div>
        </Panel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {postsContent.map((card, index) => {
            return (
              <Card
                key={index}
                title={card.title}
                imgUrl={card.imgUrl}
                // tags={card.tags}
                badge={card.badge}>
                {card.children}
              </Card>
            );
          })}
        </div>
      </div>
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        title={`${count} Title`}
        buttons={buttons2}>
        <Tooltip content="holahola">tooltip</Tooltip>
        {PlaceholderText}
        {PlaceholderText}
      </Modal>
      <Modal
        open={openModal2}
        setOpen={setOpenModal2}
        title={`${count} Title`}
        buttons={buttons3}
      />
    </main>
  );
}

export default App;
