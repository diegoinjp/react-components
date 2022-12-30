import React, { useState } from 'react';
import Modal from './components/Modal';
import Panel from './components/Panel';
import Tooltip from './components/Tooltip';
import { PlaceholderText } from './utils/consts';
import { ButtonType } from './utils/types';
import Card from './components/Card';
import { cardsContent } from './api/cards';

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
      label: 'Decrement',
      btnColor: 'primary',
      onClick: decrement,
    },
    {
      label: 'Increment',
      btnColor: 'secondary',
      onClick: increment,
    },
  ];

  const buttons1: ButtonType[] = [
    ...buttons,
    {
      label: 'Open Model',
      btnColor: 'yellow',
      onClick: open,
    },
    {
      label: 'Open Modal 2',
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
        <Panel title={`Total: ${count}`} buttons={buttons1}></Panel>
        <div className="grid grid-cols-3 gap-3">
          {cardsContent.map((card, index) => {
            return (
              <Card
                key={index}
                title={card.title}
                imgUrl={card.imgUrl}
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
