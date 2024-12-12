import React from 'react';
import Header from '../components/home/header';
import Drawer from '../components/home/drawer';
import Content from '../components/home/content';

const Home = () => {
  return (
    <div className="flex flex-col h-screen mt-[80px]">
      <Header />
      <Drawer />
      <Content />
    </div>
  );
};
export default Home;
