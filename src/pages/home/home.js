import React from 'react';
import Header from '../../components/header';
import Drawer from '../../components/drawer';
import Content from '../../components/content';

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header di bagian atas */}
      <Header />
      <div className="flex flex-1">
        {/* Drawer */}
        <Drawer />

        {/* Content */}
        <Content />
      </div>
    </div>
  );
};
export default Home;
