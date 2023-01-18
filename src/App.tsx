import React, { useState } from 'react';
import Modal from './components/Modal';
import Panel from './components/Panel';
import Tooltip from './components/Tooltip';
import { PLACEHOLDERTEXT } from './utils/consts';
import { ButtonType, MenuType } from './utils/types';
import Card from './components/Card';
import { postsContent } from './api/posts';
import Carousel from './components/Carousel';
import Tags from './components/Tags';
import Button from './components/Button';
import { BsDownload } from 'react-icons/bs';
import Navbar from './components/Navbar';
import useCountRenders from './hooks/useCountRenders';
import GradientPanel from './components/GradientPanel';
import TodoList from './components/TodoList';

function App() {
  const [count, setCount] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  useCountRenders();

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const open = () => setOpenModal(true);
  const open2 = () => setOpenModal2(true);
  const close = () => setOpenModal(false);
  const close2 = () => setOpenModal2(false);

  const buttons: ButtonType[] = [
    {
      children: '-',
      color: 'primary',
      onClick: decrement,
    },
    {
      children: '+',
      color: 'secondary',
      onClick: increment,
    },
  ];

  const buttons1: ButtonType[] = [
    ...buttons,
    {
      children: 'M1',
      color: 'yellow',
      onClick: open,
    },
    {
      children: 'M2',
      color: 'paper',
      onClick: open2,
    },
  ];

  const buttonsModal1: ButtonType[] = [
    ...buttons,
    {
      children: 'OK',
      color: 'yellow',
      onClick: close,
    },
  ];

  const buttonsModal2: ButtonType[] = [
    {
      children: 'OK',
      color: 'secondary',
      onClick: close2,
    },
  ];

  const menuLinks: MenuType[] = [
    {
      label: 'Link 1',
      url: '/',
    },
    {
      label: 'Link 2',
      url: '/',
    },
    {
      label: 'Link 3',
      url: '/',
    },
  ];

  return (
    <main className="flex justify-center w-full">
      <div className=" md:w-11/12 lg:w-[60rem] ">
        <Navbar menuLinks={menuLinks} color="red" />
        <div className="flex flex-col gap-3">
          <Carousel posts={postsContent} />
          <GradientPanel>
            <Panel
              title={`Total: ${count}`}
              buttons={buttons1}
              tags={
                <Tags
                  tags={postsContent[1].tags}
                  url={postsContent[1].imgUrl}
                />
              }>
              <div className="flex flex-col gap-3">
                {PLACEHOLDERTEXT}
                <Button icon={<BsDownload />}>Download</Button>
              </div>
            </Panel>
          </GradientPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 md:px-0">
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
      </div>
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        title={`${count} Title`}
        buttons={buttonsModal1}>
        <Tooltip content="holahola">tooltip</Tooltip>
        {PLACEHOLDERTEXT}
        {PLACEHOLDERTEXT}
      </Modal>
      <Modal
        open={openModal2}
        setOpen={setOpenModal2}
        title={`${count} Title`}
        buttons={buttonsModal2}>
        <TodoList />
      </Modal>
    </main>
  );
}

export default App;
