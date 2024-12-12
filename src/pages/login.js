import React from 'react';
import Form from '../components/login/formLogin';
import Image from '../components/login/imageLogin';

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      <Form />
      <Image />
    </div>
  );
};

export default Login;
