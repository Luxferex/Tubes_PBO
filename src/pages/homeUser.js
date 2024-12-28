import React from 'react';
import Header from '../components/homeUser/headerUser';
import Drawer from '../components/homeUser/drawer';
import Content from '../components/homeUser/content';

const HomepageUser = () => {
  return (
    <div className="flex flex-col h-screen mt-[80px]">
      <Header />
      <Drawer />
      <Content />
    </div>
  );
};

export default HomepageUser;
